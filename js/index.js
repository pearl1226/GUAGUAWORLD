// JavaScript Document
var app = new Vue({
	el: '#app',
	data:{
		as:[
			{
				img: 'img/2/b2.png',
                name: '米家調理機',
				price: 200,
			},
			{
				img: 'img/2/b3.png',
                name: '小米電水壺 2',
				price: 200,
			},
			{
				img: 'img/2/b4.png',
                name: '米家電磁爐',
				price: 200,
			},
			{
				img: 'img/2/b5.png',
                name: '知吾煮湯鍋',
				price: 200,
			},
		],
		bs:[
			{
				img: 'img/2/b7.png',
                name: '小米負離子吹風機',
				price: 200,
			},
			{
				img: 'img/2/b8.png',
                name: '聲波電動牙刷',
				price: 200,
			},
			{
				img: 'img/2/b9.png',
                name: '米家聲波電動牙刷',
				price: 200,
			},
			{
				img: 'img/2/b10.png',
                name: '米家電動刮鬍刀',
				price: 200,
			},
		],
		cs:[
			{
				img: 'img/2/b12.png',
                name: '小米行車記錄器 2',
				price: 200,
			},
			{
				img: 'img/2/b13.png',
                name: '小米無線車充',
				price: 200,
			},
			{
				img: 'img/2/b14.png',
                name: 'Xiaomi 智慧門鈴 3',
				price: 200,
			},
			{
				img: 'img/2/b15.jpg',
                name: '小米液晶手寫板',
				price: 200,
			},
		],
		ds:[
			{
				img: 'img/2/b17.png',
                name: '小米戶外藍牙喇叭 ',
				price: 200,
			},
			{
				img: 'img/2/b18.png',
                name: '小米 WiFi 訊號延伸器 ',
				price: 200,
			},
			{
				img: 'img/2/b19.png',
                name: 'Xiaomi 路由器',
				price: 200,
			},
			{
				img: 'img/2/b20.png',
                name: '智慧彩光燈帶',
				price: 200,
			},
		],
		ds:[
			{
				img: 'img/2/b22.png',
                name: '小衛質品泡沫洗手液',
				price: 200,
			},
			{
				img: 'img/2/b23.png',
                name: '米家自動感應洗手機',
				price: 200,
			},
			{
				img: 'img/2/b24.png',
                name: '小米體重計 2',
				price: 200,
			},
			{
				img: 'img/2/b25.png',
                name: '米家電動起子機',
				price: 200,
			},
		],
		es:[
			{
				img: 'img/2/b27.png',
                name: '智慧延長線',
				price: 200,
			},
			{
				img: 'img/2/b28.png',
                name: '快速充電器 ',
				price: 200,
			},
			{
				img: 'img/2/b29.png',
                name: ' GaN充電器 ',
				price: 200,
			},
			{
				img: 'img/2/b30.png',
                name: ' 充電器套裝',
				price: 200,
			},
		],
		fs:[
			{
				img: 'img/2/b32.png',
                name: '行動電源 ',
				price: 200,
			},
			{
				img: 'img/2/b33.png',
                name: '直立風冷無線充電座',
				price: 200,
			},
			{
				img: 'img/2/b34.png',
                name: '小米行動電源 3',
				price: 200,
			},
			{
				img: 'img/2/b35.png',
                name: '無線行動電源',
				price: 200,
			},
		],
		gs:[
			{
				img: 'img/2/b37.png',
                name: '電子溫濕度計',
				price: 200,
			},
			{
				img: 'img/2/b38.png',
                name: '智慧寵物餵食器',
				price: 200,
			},
			{
				img: 'img/2/b39.png',
                name: '米家藍牙溫濕度計 2',
				price: 200,
			},
			{
				img: 'img/2/b40.png',
                name: '小米無線雙模滑鼠',
				price: 200,
			},
		],
		hs:[
			{
				img: 'img/3/25.png',
                name: '米家檯燈 pro',
				price: 200,
			},
			{
				img: 'img/3/26.png',
                name: '米家螢幕掛燈',
				price: 200,
			},
			{
				img: 'img/3/27.png',
                name: '米家LED智慧檯燈',
				price: 200,
			},
			{
				img: 'img/3/28.png',
                name: '米家LED智慧燈炮',
				price: 200,
			},
		],
		is:[
			{
				img: 'img/3/1.png',
                name: '智慧顯示器 Q2 65',
				price: 200,
			},
			{
				img: 'img/3/2.png',
                name: '智慧顯示器 A2 55',
				price: 200,
			},
			{
				img: 'img/3/3.png',
                name: '智慧顯示器 A2',
				price: 200,
			},
			{
				img: 'img/3/4.png',
                name: '小米 27 型電腦螢幕',
				price: 200,
			},
		],
		js:[
			{
				img: 'img/3/5.png',
                name: '小米34型曲面螢幕',
				price: 200,
			},
			{
				img: 'img/3/6.png',
                name: '小米23.8型電腦螢幕',
				price: 200,
			},
			{
				img: 'img/3/7.png',
                name: 'Xiaomi 27型 2K',
				price: 200,
			},
			{
				img: 'img/3/8.png',
                name: '123',
				price: 200,
			},
		],
		ks:[
			{
				img: 'img/3/9.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/10.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/11.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/12.png',
                name: '123',
				price: 200,
			},
		],
		ls:[
			{
				img: 'img/3/13.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/14.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/15.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/16.png',
                name: '123',
				price: 200,
			},
		],
		ms:[
			{
				img: 'img/3/17.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/18.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/19.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/20.png',
                name: '123',
				price: 200,
			},
		],
		ns:[
			{
				img: 'img/3/21.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/22.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/23.png',
                name: '123',
				price: 200,
			},
			{
				img: 'img/3/24.png',
                name: '123',
				price: 200,
			},
		],
		aIndex: 0,
		bIndex: 0,
		cIndex: 0,
		dIndex: 0,
		eIndex: 0,
		fIndex: 0,
		gIndex: 0,
		hIndex: 0,
		iIndex: 0,
		jIndex: 0,
		kIndex: 0,
		lIndex: 0,
		mIndex: 0,
		nIndex: 0
	}
})












