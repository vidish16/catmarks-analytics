import { Chart, registerables } from 'chart.js'
import './style.css'

Chart.register(...registerables)

// Global variable to store parsed CAT data
let catData = {}

// Maximum possible marks for each year (total marks available)
const maxPossibleMarks = {
  2024: { varc: 72, lrdi: 66, qa: 66, overall: 204 },
  2023: { varc: 72, lrdi: 60, qa: 66, overall: 198 },
  2022: { varc: 72, lrdi: 60, qa: 66, overall: 198 },
  2021: { varc: 72, lrdi: 60, qa: 66, overall: 198 },
  2020: { varc: 78, lrdi: 72, qa: 78, overall: 228 },
  2019: { varc: 102, lrdi: 96, qa: 102, overall: 300 },
  2018: { varc: 102, lrdi: 96, qa: 102, overall: 300 },
  2017: { varc: 102, lrdi: 96, qa: 102, overall: 300 }
}

// Function to get maximum possible marks for a year
function getMaxPossibleMarks(year) {
  return maxPossibleMarks[year] || null
}

// Function to parse CSV data
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n')
  const headers = lines[0].split(',')
  const data = {}

  console.log('CSV Headers:', headers)

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',')
    
    // Parse values by column index for reliability
    const year = parseInt(values[0])
    const dataType = values[1] === 'Scaled Score' ? 'scaledScore' : 'estimatedRawScore'
    const slot = values[2].toLowerCase().replace(/\s+/g, '')
    const percentile = parseFloat(values[3])
    const overallScore = parseFloat(values[4])
    const varcScore = parseFloat(values[5])
    const dilrScore = parseFloat(values[6])
    const qaScore = parseFloat(values[7]) // QA_Score is at index 7 (or -1)
    
    // Handle NaN values
    const processedOverall = isNaN(overallScore) ? -1 : overallScore
    const processedVarc = isNaN(varcScore) ? -1 : varcScore
    const processedDilr = isNaN(dilrScore) ? -1 : dilrScore
    const processedQa = isNaN(qaScore) ? -1 : qaScore
    
    if (i <= 5) { // Debug first few rows
      console.log(`Row ${i}: Year=${year}, DataType=${dataType}, Slot=${slot}`)
      console.log(`  Scores: Overall=${processedOverall}, VARC=${processedVarc}, DILR=${processedDilr}, QA=${processedQa}`)
    }

    // Build nested data structure
    if (!data[year]) {
      data[year] = {}
    }
    if (!data[year][dataType]) {
      data[year][dataType] = {}
    }
    if (!data[year][dataType][slot]) {
      data[year][dataType][slot] = {
        overall: [],
        varc: [],
        lrdi: [],
        qa: []
      }
    }

    // Add data points
    const dataPoint = { marks: processedOverall, percentile: percentile }
    const varcPoint = { marks: processedVarc, percentile: percentile }
    const lrdiPoint = { marks: processedDilr, percentile: percentile }
    const qaPoint = { marks: processedQa, percentile: percentile }

    data[year][dataType][slot].overall.push(dataPoint)
    data[year][dataType][slot].varc.push(varcPoint)
    data[year][dataType][slot].lrdi.push(lrdiPoint)
    data[year][dataType][slot].qa.push(qaPoint)
  }

  // Sort all arrays by percentile ascending
  Object.keys(data).forEach(year => {
    Object.keys(data[year]).forEach(dataType => {
      Object.keys(data[year][dataType]).forEach(slot => {
        Object.keys(data[year][dataType][slot]).forEach(section => {
          data[year][dataType][slot][section].sort((a, b) => a.percentile - b.percentile)
        })
      })
    })
  })

  // Generate scaled scores from slot averages for years without scaled scores
  generateScaledScoresFromSlots(data)

  console.log('Parsed data structure:', data)
  console.log('Available years:', Object.keys(data))
  if (Object.keys(data).length > 0) {
    const firstYear = Object.keys(data)[0]
    console.log(`Sample data for year ${firstYear}:`, data[firstYear])
  }

  return data
}

// Function to generate scaled scores by averaging slots
function generateScaledScoresFromSlots(data) {
  Object.keys(data).forEach(year => {
    // Check if this year has scaled scores
    if (!data[year].scaledScore && data[year].estimatedRawScore) {
      console.log(`Generating scaled scores for ${year} from slot averages`)
      
      // Get all slots except consolidated
      const slots = Object.keys(data[year].estimatedRawScore).filter(slot => slot !== 'consolidated')
      
      if (slots.length > 0) {
        // Initialize scaled score structure
        data[year].scaledScore = { consolidated: { overall: [], varc: [], lrdi: [], qa: [] } }
        
        // Get all unique percentiles across slots
        const allPercentiles = new Set()
        slots.forEach(slot => {
          data[year].estimatedRawScore[slot].overall.forEach(point => {
            allPercentiles.add(point.percentile)
          })
        })
        
        // For each percentile, calculate averages across slots
        Array.from(allPercentiles).forEach(percentile => {
          const sections = ['overall', 'varc', 'lrdi', 'qa']
          
          sections.forEach(section => {
            const values = []
            slots.forEach(slot => {
              const point = data[year].estimatedRawScore[slot][section].find(p => p.percentile === percentile)
              if (point && point.marks > -1) {
                values.push(point.marks)
              }
            })
            
            if (values.length > 0) {
              const avgMarks = values.reduce((sum, val) => sum + val, 0) / values.length
              data[year].scaledScore.consolidated[section].push({
                marks: Math.round(avgMarks * 100) / 100, // Round to 2 decimal places
                percentile: percentile
              })
            }
          })
        })
        
        // Sort the generated scaled scores
        Object.keys(data[year].scaledScore.consolidated).forEach(section => {
          data[year].scaledScore.consolidated[section].sort((a, b) => a.percentile - b.percentile)
        })
      }
    }
  })
}

// Function to load CSV data
async function loadData() {
  try {
    const response = await fetch('/data/cat_data.csv')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const csvText = await response.text()
    catData = parseCSV(csvText)
    console.log('Data loaded successfully. Available years:', Object.keys(catData))
  } catch (error) {
    console.error('Error loading data:', error)
    // Fallback to empty data structure
    catData = {}
  }
}

// DOM element references
async function initializeApp() {
  // Load data first
  await loadData()
  
  const yearSelect = document.getElementById('year-select')
  const sectionSelect = document.getElementById('section-select')
  const dataTypeSelect = document.getElementById('data-type-select')
  const slotSelect = document.getElementById('slot-select')
  const tableTitle = document.getElementById('table-title')
  const tableBody = document.getElementById('table-body')
  
  let currentChart = null

  // Event listeners
  yearSelect.addEventListener('change', updateChart)
  sectionSelect.addEventListener('change', updateChart)
  dataTypeSelect.addEventListener('change', () => {
    updateSlotOptions()
    updateChart()
  })
  slotSelect.addEventListener('change', updateChart)

  // Initialize
  updateSlotOptions()
  updateChart()

  function updateSlotOptions() {
    const selectedYear = yearSelect.value
    const selectedDataType = dataTypeSelect.value
    
    const yearData = catData[selectedYear]
    if (!yearData || !yearData[selectedDataType]) {
      slotSelect.innerHTML = '<option value="">No slots available</option>'
      slotSelect.disabled = true
      return
    }

    const slots = Object.keys(yearData[selectedDataType])
    slotSelect.innerHTML = ''
    slotSelect.disabled = false

    slots.forEach(slot => {
      const option = document.createElement('option')
      option.value = slot
      if (slot === 'consolidated') {
        option.textContent = 'Consolidated'
      } else if (slot.startsWith('slot')) {
        // Convert slot1, slot2, slot3 back to display format
        const slotNumber = slot.replace('slot', '')
        option.textContent = `Slot ${slotNumber}`
      } else {
        option.textContent = slot
      }
      slotSelect.appendChild(option)
    })
  }

  function displayMaxMarks(year, dataType, slot, maxMarks) {
    const maxMarksInfo = document.getElementById('max-marks-info')
    
    if (!maxMarks) {
      maxMarksInfo.innerHTML = '<p>No maximum marks data available for this year</p>'
      return
    }

    const dataTypeText = dataType === 'scaledScore' ? 'Scaled Score' : 'Estimated Raw Score'
    const slotText = slot === 'consolidated' ? 'Consolidated' : slot.replace('slot', 'Slot ').toUpperCase()

    maxMarksInfo.innerHTML = `
      <h3>Maximum Possible Marks - CAT ${year}</h3>
      <div class="max-marks-grid">
        <div class="max-mark-item">
          <div class="max-mark-label">Overall</div>
          <div class="max-mark-value">${maxMarks.overall}</div>
        </div>
        <div class="max-mark-item">
          <div class="max-mark-label">VARC</div>
          <div class="max-mark-value">${maxMarks.varc}</div>
        </div>
        <div class="max-mark-item">
          <div class="max-mark-label">LRDI</div>
          <div class="max-mark-value">${maxMarks.lrdi}</div>
        </div>
        <div class="max-mark-item">
          <div class="max-mark-label">QA</div>
          <div class="max-mark-value">${maxMarks.qa}</div>
        </div>
      </div>
    `
  }

  function updateChart() {
    const selectedYear = yearSelect.value
    const selectedSection = sectionSelect.value
    const selectedDataType = dataTypeSelect.value
    const selectedSlot = slotSelect.value
    
    console.log('updateChart called with:', {
      year: selectedYear,
      section: selectedSection,
      dataType: selectedDataType,
      slot: selectedSlot
    })
    
    // Get data for selected combination
    const yearData = catData[selectedYear]
    console.log('yearData:', yearData)
    
    if (!yearData) {
      console.log('No year data found for:', selectedYear)
      showNoDataMessage()
      tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
      tableTitle.textContent = 'No Data Available'
      return
    }
    
    if (!yearData[selectedDataType]) {
      console.log('No data type found:', selectedDataType, 'Available types:', Object.keys(yearData))
      showNoDataMessage()
      tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
      tableTitle.textContent = 'No Data Available'
      return
    }
    
    if (!yearData[selectedDataType][selectedSlot]) {
      console.log('No slot data found:', selectedSlot, 'Available slots:', Object.keys(yearData[selectedDataType]))
      showNoDataMessage()
      tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
      tableTitle.textContent = 'No Data Available'
      return
    }

    const slotData = yearData[selectedDataType][selectedSlot]
    console.log('slotData:', slotData)

    // Get and display maximum possible marks for the year
    const maxMarks = getMaxPossibleMarks(selectedYear)
    displayMaxMarks(selectedYear, selectedDataType, selectedSlot, maxMarks)

    // Update both chart and table
    updateTable()

    // Handle section selection
    if (selectedSection === 'all-sections') {
      createMultiSectionChart(slotData, selectedYear, selectedDataType, selectedSlot)
    } else {
      const sectionData = slotData[selectedSection]
      if (!sectionData) {
        showNoDataMessage()
        return
      }
      createSingleSectionChart(sectionData, selectedYear, selectedSection, selectedDataType, selectedSlot)
    }
  }

  function createSingleSectionChart(sectionData, year, section, dataType, slot) {
    if (currentChart) {
      currentChart.destroy()
    }

    const sectionNames = {
      overall: 'Overall',
      varc: 'VARC (Verbal Ability & Reading Comprehension)',
      lrdi: 'LRDI (Logical Reasoning & Data Interpretation)',
      qa: 'QA (Quantitative Ability)'
    }

    const ctx = document.getElementById('cutoff-chart').getContext('2d')
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: sectionNames[section],
          data: sectionData.filter(point => !isNaN(point.marks) && point.marks > -1).map(point => ({
            x: point.percentile,
            y: point.marks
          })),
          borderColor: getSectionColor(section),
          backgroundColor: getSectionColor(section) + '20',
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'point'
        },
        plugins: {
          title: {
            display: true,
            text: `CAT ${year} - ${sectionNames[section]} (${dataType === 'scaledScore' ? 'Scaled Score' : 'Estimated Raw Score'} - ${slot === 'consolidated' ? 'Consolidated' : slot.replace('slot', 'Slot ').toUpperCase()})`,
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            type: 'linear',
            title: {
              display: true,
              text: 'Percentile'
            },
            min: 75,
            max: 100,
            ticks: {
              stepSize: 5,
              callback: function(value) {
                return value + '%'
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Marks'
            },
            beginAtZero: false
          }
        },
        onHover: (event, activeElements) => {
          if (activeElements.length > 0) {
            const point = activeElements[0]
            const dataPoint = sectionData[point.index]
            showHoverInfo(dataPoint.percentile, dataPoint.marks, sectionNames[section])
          }
        }
      }
    })
  }

  function createMultiSectionChart(slotData, year, dataType, slot) {
    if (currentChart) {
      currentChart.destroy()
    }

    // Get all sections except overall for comparison
    const sections = Object.keys(slotData).filter(section => section !== 'overall')
    const datasets = sections.map(section => {
      const sectionNames = {
        varc: 'VARC',
        lrdi: 'LRDI', 
        qa: 'QA'
      }
      
      return {
        label: sectionNames[section],
        data: slotData[section].filter(point => !isNaN(point.marks) && point.marks > -1).map(point => ({
          x: point.percentile,
          y: point.marks
        })),
        borderColor: getSectionColor(section),
        backgroundColor: getSectionColor(section) + '20',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4
      }
    })

    const ctx = document.getElementById('cutoff-chart').getContext('2d')
    currentChart = new Chart(ctx, {
      type: 'line',
      data: { datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'point'
        },
        plugins: {
          title: {
            display: true,
            text: `CAT ${year} - All Sections Comparison (${dataType === 'scaledScore' ? 'Scaled Score' : 'Estimated Raw Score'} - ${slot === 'consolidated' ? 'Consolidated' : slot.replace('slot', 'Slot ').toUpperCase()})`,
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          x: {
            type: 'linear',
            title: {
              display: true,
              text: 'Percentile'
            },
            min: 75,
            max: 100,
            ticks: {
              stepSize: 5,
              callback: function(value) {
                return value + '%'
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Marks'
            },
            beginAtZero: false
          }
        }
      }
    })
  }

  function showHoverInfo(percentile, marks, section) {
    const hoverInfo = document.getElementById('hover-info')
    hoverInfo.innerHTML = `
      <strong>${section}</strong><br>
      Percentile: ${percentile}%<br>
      Marks: ${marks}
    `
  }

  function getSectionColor(section) {
    const sectionColors = {
      'overall': '#FF6384',    // Pink/Red for Overall
      'varc': '#36A2EB',       // Blue for VARC
      'lrdi': '#FFCE56',       // Yellow for LRDI
      'qa': '#4BC0C0'          // Teal for QA
    }
    return sectionColors[section] || '#C9CBCF'
  }

  function showNoDataMessage() {
    if (currentChart) {
      currentChart.destroy()
    }
    const ctx = document.getElementById('cutoff-chart').getContext('2d')
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: []
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'No data available for selected combination',
            font: {
              size: 18,
              weight: 'bold'
            },
            color: '#ef4444'
          }
        }
      }
    })
  }

  function updateTable() {
    const selectedYear = yearSelect.value
    const selectedSection = sectionSelect.value
    const selectedDataType = dataTypeSelect.value
    const selectedSlot = slotSelect.value
    
    // Get data for selected combination
    const yearData = catData[selectedYear]
    if (!yearData || !yearData[selectedDataType] || !yearData[selectedDataType][selectedSlot]) {
      tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
      tableTitle.textContent = 'No Data Available'
      return
    }

    const slotData = yearData[selectedDataType][selectedSlot]

    // Handle section selection for table
    if (selectedSection === 'all-sections') {
      createMultiSectionTable(slotData, selectedYear, selectedDataType, selectedSlot)
    } else {
      const sectionData = slotData[selectedSection]
      if (!sectionData) {
        tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
        tableTitle.textContent = 'No Data Available'
        return
      }
      createSingleSectionTable(sectionData, selectedYear, selectedSection, selectedDataType, selectedSlot)
    }
  }

  function createSingleSectionTable(sectionData, year, section, dataType, slot) {
    const sectionNames = {
      overall: 'Overall',
      varc: 'VARC (Verbal Ability & Reading Comprehension)',
      lrdi: 'LRDI (Logical Reasoning & Data Interpretation)',
      qa: 'QA (Quantitative Ability)'
    }

    const dataTypeText = dataType === 'scaledScore' ? 'Scaled Score' : 'Estimated Raw Score'
    const slotText = slot === 'consolidated' ? 'Consolidated' : slot.replace('slot', 'Slot ').toUpperCase()
    
    tableTitle.textContent = `CAT ${year} - ${sectionNames[section]} (${dataTypeText} - ${slotText})`
    
    // Reset table header for single section
    const tableHead = document.querySelector('#data-table thead tr')
    tableHead.innerHTML = `
      <th>Percentile</th>
      <th>Marks</th>
    `
    
    // Sort data by percentile in descending order for table
    const sortedData = [...sectionData].sort((a, b) => b.percentile - a.percentile)
    
    tableBody.innerHTML = sortedData.map(point => 
      `<tr>
        <td>${point.percentile}%</td>
        <td>${isNaN(point.marks) ? '-' : point.marks}</td>
      </tr>`
    ).join('')
  }

  function createMultiSectionTable(slotData, year, dataType, slot) {
    const dataTypeText = dataType === 'scaledScore' ? 'Scaled Score' : 'Estimated Raw Score'
    const slotText = slot === 'consolidated' ? 'Consolidated' : slot.replace('slot', 'Slot ').toUpperCase()
    
    tableTitle.textContent = `CAT ${year} - All Sections Comparison (${dataTypeText} - ${slotText})`
    
    // Get all sections except overall
    const sections = Object.keys(slotData).filter(section => section !== 'overall')
    const sectionNames = {
      varc: 'VARC',
      lrdi: 'LRDI',
      qa: 'QA'
    }

    // Create table header for multi-section view
    const tableHead = document.querySelector('#data-table thead tr')
    tableHead.innerHTML = `
      <th>Percentile</th>
      ${sections.map(section => `<th>${sectionNames[section]}</th>`).join('')}
    `

    // Get unique percentiles across all sections
    const allPercentiles = new Set()
    sections.forEach(section => {
      if (slotData[section]) {
        slotData[section].forEach(point => allPercentiles.add(point.percentile))
      }
    })

    const sortedPercentiles = Array.from(allPercentiles).sort((a, b) => b - a)

    // Create table rows
    tableBody.innerHTML = sortedPercentiles.map(percentile => {
      const row = [`<td>${percentile}%</td>`]
      sections.forEach(section => {
        const dataPoint = slotData[section]?.find(point => point.percentile === percentile)
        const marks = dataPoint ? dataPoint.marks : null
        row.push(`<td>${marks !== null && !isNaN(marks) ? marks : '-'}</td>`)
      })
      return `<tr>${row.join('')}</tr>`
    }).join('')
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp)
