let baseUrl = ''; 
let routerMode = 'hash';
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {	
  imgBaseUrl = 'http://cangdu.org:8001/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http://cangdu.org:8001';
  imgBaseUrl = 'http://cangdu.org:8001/img/';
}

// if (process.env.NODE_ENV == 'development') {	
//   imgBaseUrl = 'http://localhost:8001/img/';

// }else if(process.env.NODE_ENV == 'production'){
// 	baseUrl = 'http://localhost:8001';
//   imgBaseUrl = 'http://localhost:8001/img/';
// }

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}