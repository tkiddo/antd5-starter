const baseToken = {
  colorPrimary: '#fa541c',
  colorBgSpotlight: '#00b96b',
}

const radioToken = {
  colorPrimary: '#00b96b',
}

const modalToken = {
  borderRadiusLG: 20,
}

const tooltipToken = {
  colorBgSpotlight: '#00b96b',
}

const buttonToken={
  borderRadius:0,
}

export default {
  token: baseToken,
  components: {
    Radio: radioToken,
    Modal: modalToken,
    Tooltip: tooltipToken,
    Button:buttonToken
  },
}
