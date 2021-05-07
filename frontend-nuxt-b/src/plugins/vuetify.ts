import ja from 'vuetify/src/locale/ja'

export default function ({ $config }: any) {
  console.log(process.env.API_TARGET)
  return {
    lang: {
      locales: { ja },
      current: 'ja',
    },
    theme: {
      dark: false,
    },
    iconfont: 'mdi',
  }
}
