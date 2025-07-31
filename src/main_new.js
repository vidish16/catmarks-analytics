import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

// CAT examination data from 2017 to 2023 (Real data based on coaching institute analyses)
const catData = {
  2023: {
    scaledScore: {
      overall: [
        { marks: 101.26, percentile: 99.9 },
        { marks: 84.29, percentile: 99.5 },
        { marks: 76.09, percentile: 99.0 },
        { marks: 66.68, percentile: 98.0 },
        { marks: 54.86, percentile: 95.0 },
        { marks: 45.58, percentile: 90.0 },
        { marks: 42.29, percentile: 85.0 },
        { marks: 37.68, percentile: 80.0 }
      ],
      varc: [
        { marks: 51.14, percentile: 99.9 },
        { marks: 44.00, percentile: 99.5 },
        { marks: 39.77, percentile: 99.0 },
        { marks: 36.00, percentile: 98.0 },
        { marks: 28.73, percentile: 95.0 },
        { marks: 23.38, percentile: 90.0 },
        { marks: 20.66, percentile: 85.0 },
        { marks: 17.58, percentile: 80.0 }
      ],
      lrdi: [
        { marks: 36.58, percentile: 99.9 },
        { marks: 30.99, percentile: 99.5 },
        { marks: 27.34, percentile: 99.0 },
        { marks: 24.50, percentile: 98.0 },
        { marks: 19.26, percentile: 95.0 },
        { marks: 15.63, percentile: 90.0 },
        { marks: 13.01, percentile: 85.0 },
        { marks: 11.67, percentile: 80.0 }
      ],
      qa: [
        { marks: 36.40, percentile: 99.9 },
        { marks: 29.84, percentile: 99.5 },
        { marks: 26.69, percentile: 99.0 },
        { marks: 24.31, percentile: 98.0 },
        { marks: 18.28, percentile: 95.0 },
        { marks: 13.63, percentile: 90.0 },
        { marks: 12.00, percentile: 85.0 },
        { marks: 9.20, percentile: 80.0 }
      ]
    },
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 80, percentile: 99.0 },
          { marks: 55, percentile: 95.0 },
          { marks: 46.5, percentile: 90.0 },
          { marks: 40, percentile: 85.0 },
          { marks: 36, percentile: 80.0 }
        ],
        varc: [
          { marks: 40, percentile: 99.0 },
          { marks: 29, percentile: 95.0 },
          { marks: 23, percentile: 90.0 },
          { marks: 21, percentile: 85.0 },
          { marks: 19, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 26, percentile: 99.0 },
          { marks: 19, percentile: 95.0 },
          { marks: 16, percentile: 90.0 },
          { marks: 13.5, percentile: 85.0 },
          { marks: 11.5, percentile: 80.0 }
        ],
        qa: [
          { marks: 26.5, percentile: 99.0 },
          { marks: 21, percentile: 95.0 },
          { marks: 16, percentile: 90.0 },
          { marks: 13, percentile: 85.0 },
          { marks: 11, percentile: 80.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 82.5, percentile: 99.0 },
          { marks: 57.5, percentile: 95.0 },
          { marks: 47, percentile: 90.0 },
          { marks: 41.5, percentile: 85.0 },
          { marks: 37.5, percentile: 80.0 }
        ],
        varc: [
          { marks: 41, percentile: 99.0 },
          { marks: 31.5, percentile: 95.0 },
          { marks: 25, percentile: 90.0 },
          { marks: 21, percentile: 85.0 },
          { marks: 19, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 22.5, percentile: 99.0 },
          { marks: 19, percentile: 95.0 },
          { marks: 14.5, percentile: 90.0 },
          { marks: 12.5, percentile: 85.0 },
          { marks: 10.5, percentile: 80.0 }
        ],
        qa: [
          { marks: 27.5, percentile: 99.0 },
          { marks: 21, percentile: 95.0 },
          { marks: 16, percentile: 90.0 },
          { marks: 13, percentile: 85.0 },
          { marks: 11, percentile: 80.0 }
        ]
      },
      slot3: {
        overall: [
          { marks: 79, percentile: 99.0 },
          { marks: 57.5, percentile: 95.0 },
          { marks: 47, percentile: 90.0 },
          { marks: 40.5, percentile: 85.0 },
          { marks: 36.5, percentile: 80.0 }
        ],
        varc: [
          { marks: 39, percentile: 99.0 },
          { marks: 29, percentile: 95.0 },
          { marks: 24.5, percentile: 90.0 },
          { marks: 21, percentile: 85.0 },
          { marks: 19, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 23.5, percentile: 99.0 },
          { marks: 19, percentile: 95.0 },
          { marks: 16, percentile: 90.0 },
          { marks: 13, percentile: 85.0 },
          { marks: 10.5, percentile: 80.0 }
        ],
        qa: [
          { marks: 27.5, percentile: 99.0 },
          { marks: 19, percentile: 95.0 },
          { marks: 16, percentile: 90.0 },
          { marks: 13, percentile: 85.0 },
          { marks: 10.5, percentile: 80.0 }
        ]
      }
    }
  },
  2022: {
    scaledScore: {
      overall: [
        { marks: 109.9, percentile: 99.9 },
        { marks: 92.87, percentile: 99.5 },
        { marks: 83.64, percentile: 99.0 },
        { marks: 73.88, percentile: 98.0 },
        { marks: 59.75, percentile: 95.0 },
        { marks: 48.44, percentile: 90.0 },
        { marks: 41.32, percentile: 85.0 },
        { marks: 36.02, percentile: 80.0 }
      ],
      varc: [
        { marks: 47, percentile: 99.9 },
        { marks: 43, percentile: 99.5 },
        { marks: 40, percentile: 99.0 },
        { marks: 35, percentile: 98.0 },
        { marks: 28, percentile: 95.0 },
        { marks: 24, percentile: 90.0 },
        { marks: 21, percentile: 85.0 },
        { marks: 17, percentile: 80.0 }
      ],
      lrdi: [
        { marks: 37, percentile: 99.9 },
        { marks: 33, percentile: 99.5 },
        { marks: 30, percentile: 99.0 },
        { marks: 25, percentile: 98.0 },
        { marks: 21, percentile: 95.0 },
        { marks: 18, percentile: 90.0 },
        { marks: 14, percentile: 85.0 },
        { marks: 13, percentile: 80.0 }
      ],
      qa: [
        { marks: 47, percentile: 99.9 },
        { marks: 38, percentile: 99.5 },
        { marks: 33, percentile: 99.0 },
        { marks: 29, percentile: 98.0 },
        { marks: 22, percentile: 95.0 },
        { marks: 17, percentile: 90.0 },
        { marks: 15, percentile: 85.0 },
        { marks: 12, percentile: 80.0 }
      ]
    },
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 98, percentile: 99.0 },
          { marks: 71, percentile: 95.0 },
          { marks: 59, percentile: 90.0 },
          { marks: 49.5, percentile: 85.0 },
          { marks: 44.5, percentile: 80.0 }
        ],
        varc: [
          { marks: 39, percentile: 99.0 },
          { marks: 31, percentile: 95.0 },
          { marks: 27, percentile: 90.0 },
          { marks: 24, percentile: 85.0 },
          { marks: 19.5, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 29, percentile: 99.0 },
          { marks: 23, percentile: 95.0 },
          { marks: 19, percentile: 90.0 },
          { marks: 17, percentile: 85.0 },
          { marks: 15, percentile: 80.0 }
        ],
        qa: [
          { marks: 37, percentile: 99.0 },
          { marks: 29, percentile: 95.0 },
          { marks: 23, percentile: 90.0 },
          { marks: 19, percentile: 85.0 },
          { marks: 17, percentile: 80.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 99, percentile: 99.0 },
          { marks: 71, percentile: 95.0 },
          { marks: 59, percentile: 90.0 },
          { marks: 50, percentile: 85.0 },
          { marks: 44.5, percentile: 80.0 }
        ],
        varc: [
          { marks: 41, percentile: 99.0 },
          { marks: 32, percentile: 95.0 },
          { marks: 28, percentile: 90.0 },
          { marks: 25, percentile: 85.0 },
          { marks: 20.5, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 31, percentile: 99.0 },
          { marks: 23, percentile: 95.0 },
          { marks: 19, percentile: 90.0 },
          { marks: 17, percentile: 85.0 },
          { marks: 15, percentile: 80.0 }
        ],
        qa: [
          { marks: 37, percentile: 99.0 },
          { marks: 32, percentile: 95.0 },
          { marks: 25, percentile: 90.0 },
          { marks: 14, percentile: 85.0 },
          { marks: 12, percentile: 80.0 }
        ]
      },
      slot3: {
        overall: [
          { marks: 94.5, percentile: 99.0 },
          { marks: 67.5, percentile: 95.0 },
          { marks: 56.5, percentile: 90.0 },
          { marks: 48, percentile: 85.0 },
          { marks: 42, percentile: 80.0 }
        ],
        varc: [
          { marks: 41, percentile: 99.0 },
          { marks: 32, percentile: 95.0 },
          { marks: 28, percentile: 90.0 },
          { marks: 25, percentile: 85.0 },
          { marks: 20.5, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 26.5, percentile: 99.0 },
          { marks: 21, percentile: 95.0 },
          { marks: 17, percentile: 90.0 },
          { marks: 15, percentile: 85.0 },
          { marks: 13, percentile: 80.0 }
        ],
        qa: [
          { marks: 31.5, percentile: 99.0 },
          { marks: 24, percentile: 95.0 },
          { marks: 18, percentile: 90.0 },
          { marks: 14, percentile: 85.0 },
          { marks: 12, percentile: 80.0 }
        ]
      }
    }
  },
  2021: {
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 97, percentile: 99.0 },
          { marks: 60, percentile: 95.0 },
          { marks: 46.5, percentile: 90.0 },
          { marks: 41.5, percentile: 85.0 },
          { marks: 36.5, percentile: 80.0 }
        ],
        varc: [
          { marks: 38, percentile: 99.0 },
          { marks: 30, percentile: 95.0 },
          { marks: 25, percentile: 90.0 },
          { marks: 22, percentile: 85.0 },
          { marks: 20, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 28.5, percentile: 99.0 },
          { marks: 21, percentile: 95.0 },
          { marks: 17, percentile: 90.0 },
          { marks: 17, percentile: 85.0 },
          { marks: 13, percentile: 80.0 }
        ],
        qa: [
          { marks: 41, percentile: 99.0 },
          { marks: 25, percentile: 95.0 },
          { marks: 21, percentile: 90.0 },
          { marks: 22, percentile: 85.0 },
          { marks: 14, percentile: 80.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 95, percentile: 99.0 },
          { marks: 68, percentile: 95.0 },
          { marks: 56, percentile: 90.0 },
          { marks: 49, percentile: 85.0 },
          { marks: 42, percentile: 80.0 }
        ],
        varc: [
          { marks: 38, percentile: 99.0 },
          { marks: 30, percentile: 95.0 },
          { marks: 25, percentile: 90.0 },
          { marks: 22, percentile: 85.0 },
          { marks: 20, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 30.5, percentile: 99.0 },
          { marks: 21, percentile: 95.0 },
          { marks: 17, percentile: 90.0 },
          { marks: 15, percentile: 85.0 },
          { marks: 13, percentile: 80.0 }
        ],
        qa: [
          { marks: 40.5, percentile: 99.0 },
          { marks: 25, percentile: 95.0 },
          { marks: 21, percentile: 90.0 },
          { marks: 17, percentile: 85.0 },
          { marks: 14, percentile: 80.0 }
        ]
      },
      slot3: {
        overall: [
          { marks: 90.5, percentile: 99.0 },
          { marks: 63, percentile: 95.0 },
          { marks: 52, percentile: 90.0 },
          { marks: 45, percentile: 85.0 },
          { marks: 39, percentile: 80.0 }
        ],
        varc: [
          { marks: 37.5, percentile: 99.0 },
          { marks: 29, percentile: 95.0 },
          { marks: 24, percentile: 90.0 },
          { marks: 22, percentile: 85.0 },
          { marks: 20, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 31.5, percentile: 99.0 },
          { marks: 18, percentile: 95.0 },
          { marks: 14, percentile: 90.0 },
          { marks: 12, percentile: 85.0 },
          { marks: 10, percentile: 80.0 }
        ],
        qa: [
          { marks: 35, percentile: 99.0 },
          { marks: 22, percentile: 95.0 },
          { marks: 19, percentile: 90.0 },
          { marks: 16, percentile: 85.0 },
          { marks: 13, percentile: 80.0 }
        ]
      }
    }
  },
  2020: {
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 112.5, percentile: 99.0 },
          { marks: 100, percentile: 95.0 },
          { marks: 85, percentile: 90.0 }
        ],
        varc: [
          { marks: 46.5, percentile: 99.0 },
          { marks: 35, percentile: 95.0 },
          { marks: 28, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 35, percentile: 99.0 },
          { marks: 28.5, percentile: 95.0 },
          { marks: 22, percentile: 90.0 }
        ],
        qa: [
          { marks: 45, percentile: 99.0 },
          { marks: 35, percentile: 95.0 },
          { marks: 28, percentile: 90.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 115, percentile: 99.0 },
          { marks: 90, percentile: 95.0 },
          { marks: 78, percentile: 90.0 }
        ],
        varc: [
          { marks: 43, percentile: 99.0 },
          { marks: 32.5, percentile: 95.0 },
          { marks: 26, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 33.5, percentile: 99.0 },
          { marks: 26.5, percentile: 95.0 },
          { marks: 20, percentile: 90.0 }
        ],
        qa: [
          { marks: 43, percentile: 99.0 },
          { marks: 30, percentile: 95.0 },
          { marks: 24, percentile: 90.0 }
        ]
      },
      slot3: {
        overall: [
          { marks: 105, percentile: 99.0 },
          { marks: 90, percentile: 95.0 },
          { marks: 75, percentile: 90.0 }
        ],
        varc: [
          { marks: 46.5, percentile: 99.0 },
          { marks: 36.5, percentile: 95.0 },
          { marks: 30, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 29.5, percentile: 99.0 },
          { marks: 22, percentile: 95.0 },
          { marks: 18, percentile: 90.0 }
        ],
        qa: [
          { marks: 43, percentile: 99.0 },
          { marks: 30, percentile: 95.0 },
          { marks: 24, percentile: 90.0 }
        ]
      }
    }
  },
  2019: {
    estimatedRawScore: {
      consolidated: {
        overall: [
          { marks: 170, percentile: 99.5 },
          { marks: 160.5, percentile: 99.0 },
          { marks: 125, percentile: 95.0 },
          { marks: 100, percentile: 90.0 },
          { marks: 96.5, percentile: 85.0 },
          { marks: 75, percentile: 80.0 }
        ],
        varc: [
          { marks: 68, percentile: 99.5 },
          { marks: 68, percentile: 99.0 },
          { marks: 56, percentile: 95.0 },
          { marks: 46.5, percentile: 90.0 },
          { marks: 49.5, percentile: 85.0 },
          { marks: 30, percentile: 80.0 }
        ],
        lrdi: [
          { marks: 57, percentile: 99.5 },
          { marks: 49, percentile: 99.0 },
          { marks: 37.5, percentile: 95.0 },
          { marks: 33, percentile: 90.0 },
          { marks: 26.5, percentile: 85.0 },
          { marks: 24, percentile: 80.0 }
        ],
        qa: [
          { marks: 69, percentile: 99.5 },
          { marks: 60, percentile: 99.0 },
          { marks: 48.5, percentile: 95.0 },
          { marks: 38.5, percentile: 90.0 },
          { marks: 36.5, percentile: 85.0 },
          { marks: 23, percentile: 80.0 }
        ]
      }
    }
  },
  2018: {
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 160, percentile: 99.5 },
          { marks: 152.5, percentile: 99.0 },
          { marks: 120, percentile: 95.0 },
          { marks: 105, percentile: 90.0 }
        ],
        varc: [
          { marks: 68, percentile: 99.5 },
          { marks: 62, percentile: 99.0 },
          { marks: 50, percentile: 95.0 },
          { marks: 44, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 55, percentile: 99.5 },
          { marks: 47, percentile: 99.0 },
          { marks: 35, percentile: 95.0 },
          { marks: 24, percentile: 90.0 }
        ],
        qa: [
          { marks: 50, percentile: 99.5 },
          { marks: 46.5, percentile: 99.0 },
          { marks: 35, percentile: 95.0 },
          { marks: 25, percentile: 90.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 142.5, percentile: 99.0 },
          { marks: 97.5, percentile: 90.0 }
        ],
        varc: [
          { marks: 59, percentile: 99.0 },
          { marks: 45.5, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 51, percentile: 99.0 },
          { marks: 32.5, percentile: 90.0 }
        ],
        qa: [
          { marks: 49, percentile: 99.0 },
          { marks: 29.5, percentile: 90.0 }
        ]
      }
    }
  },
  2017: {
    estimatedRawScore: {
      slot1: {
        overall: [
          { marks: 152.5, percentile: 99.0 },
          { marks: 140, percentile: 98.0 },
          { marks: 135, percentile: 95.0 },
          { marks: 125, percentile: 90.0 }
        ],
        varc: [
          { marks: 57.5, percentile: 99.0 },
          { marks: 52.5, percentile: 98.0 },
          { marks: 47.5, percentile: 95.0 },
          { marks: 42.5, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 33.5, percentile: 99.0 },
          { marks: 33.5, percentile: 98.0 },
          { marks: 29, percentile: 95.0 },
          { marks: 26.5, percentile: 90.0 }
        ],
        qa: [
          { marks: 62.5, percentile: 99.0 },
          { marks: 62.5, percentile: 98.0 },
          { marks: 57.5, percentile: 95.0 },
          { marks: 50, percentile: 90.0 }
        ]
      },
      slot2: {
        overall: [
          { marks: 157.5, percentile: 99.0 },
          { marks: 145, percentile: 98.0 },
          { marks: 142.5, percentile: 95.0 },
          { marks: 130, percentile: 90.0 }
        ],
        varc: [
          { marks: 52.5, percentile: 99.0 },
          { marks: 52.5, percentile: 98.0 },
          { marks: 47.5, percentile: 95.0 },
          { marks: 42.5, percentile: 90.0 }
        ],
        lrdi: [
          { marks: 40, percentile: 99.0 },
          { marks: 42.5, percentile: 98.0 },
          { marks: 37.5, percentile: 95.0 },
          { marks: 29, percentile: 90.0 }
        ],
        qa: [
          { marks: 62.5, percentile: 99.0 },
          { marks: 62.5, percentile: 98.0 },
          { marks: 57.5, percentile: 95.0 },
          { marks: 50, percentile: 90.0 }
        ]
      }
    }
  }
}

// DOM element references
function initializeApp() {
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
      option.textContent = slot === 'consolidated' ? 'Consolidated' : 
                          slot.replace('slot', 'Slot ').toUpperCase()
      slotSelect.appendChild(option)
    })
  }

  function updateChart() {
    const selectedYear = yearSelect.value
    const selectedSection = sectionSelect.value
    const selectedDataType = dataTypeSelect.value
    const selectedSlot = slotSelect.value
    
    // Get data for selected combination
    const yearData = catData[selectedYear]
    if (!yearData || !yearData[selectedDataType] || !yearData[selectedDataType][selectedSlot]) {
      showNoDataMessage()
      tableBody.innerHTML = '<tr><td colspan="2">No data available</td></tr>'
      tableTitle.textContent = 'No Data Available'
      return
    }

    const slotData = yearData[selectedDataType][selectedSlot]

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
          data: sectionData.map(point => ({
            x: point.percentile,
            y: point.marks
          })),
          borderColor: getRandomColor(),
          backgroundColor: getRandomColor() + '20',
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
            title: {
              display: true,
              text: 'Percentile'
            },
            reverse: true,
            min: 75,
            max: 100
          },
          y: {
            title: {
              display: true,
              text: 'Marks'
            }
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
        data: slotData[section].map(point => ({
          x: point.percentile,
          y: point.marks
        })),
        borderColor: getRandomColor(),
        backgroundColor: getRandomColor() + '20',
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
            title: {
              display: true,
              text: 'Percentile'
            },
            reverse: true,
            min: 75,
            max: 100
          },
          y: {
            title: {
              display: true,
              text: 'Marks'
            }
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

  function getRandomColor() {
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', 
      '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
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
    
    // Sort data by percentile in descending order
    const sortedData = [...sectionData].sort((a, b) => b.percentile - a.percentile)
    
    tableBody.innerHTML = sortedData.map(point => 
      `<tr>
        <td>${point.percentile}%</td>
        <td>${point.marks}</td>
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
        row.push(`<td>${dataPoint ? dataPoint.marks : '-'}</td>`)
      })
      return `<tr>${row.join('')}</tr>`
    }).join('')
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp)
