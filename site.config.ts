import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
url: 'https://yiurblog.top/',
  lang: 'zh-CN',
  title: '云边的小旅店',
  author: {
    name: '洛忆雨Yiur',
	avatar: 'https://www.yiurblog.top/head.jpg',
	status: {
      emoji: '😢'	
    },
  },
  subtitle: '',
  description: '无人相伴的路，惝恍迷离的舞',
  social: [
    {
      name: 'QQ 群',
      link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=Pi01N7gf8UGCeOauFHmQ0lmrO0NlDjKG&authKey=ReAj4s8B6PVemoefBRZSdHaQsw2mGO5tLwflyIvHKz3EXXaDCVJ6hURt7%2FEmBuOu&noverify=0&group_code=464982077',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/thisisluoyiyu',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/159435471',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Luo_yiyu',
      icon: 'i-ri-twitter-x-fill',
      color: 'black',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/Luo_yiyu',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
