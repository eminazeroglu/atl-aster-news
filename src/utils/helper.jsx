import routers from "../routers/routers";
import emailjs from '@emailjs/browser';
import { notification as AntNotification } from 'antd'
import az from '@/locales/az'
import en from '@/locales/en'
import store from "../store";

export const objectToQueryParams = (obj) => {
	return Object.entries(obj)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
		.join('&');
}

export const route = (name, params) => {
	const find = routers.find(i => i.name === name);
	const itemParams = Object.entries(params)

	if (find) {
		let text = find.path;
		for (let [key, value] of itemParams) {
			text = text.replace(':' + key, value)
		}
		return text;
	}

	return '/'
}

export const env = (key) => {
	return import.meta.env[`VITE_${key}`];
}

export const sendEmail = async (values) => {
	try {
		return await emailjs.send(
			env('EMIAL_SERVICE_ID'),
			env('EMIAL_TEMPLATE_ID'),
			{
				...values,
				// lib_version: '4.1.0',
				// service_id: env('EMIAL_SERVICE_ID'),
				// template_id: env('EMIAL_TEMPLATE_ID'),
				// user_id: env('EMIAL_PUBLIC_KEY'),
			},
			{
				publicKey: env('EMIAL_PUBLIC_KEY'),
			}
		);
	}
	catch (e) {
		console.log('asdas');
		return e;
	}
}

export const notification = (description, placement = 'topRight') => {
	AntNotification.info({
		message: 'Bilidirş',
		description,
		placement,
	});
}

export const translate = (path) => {
	const languages = {
		az,
		en
	}
	const language = store.getState().app.language;
	let translates = languages[language];
	 
	const parts = path.split('.');

	for (let part of parts) {
		if (!translates[part]) {
			return path
		}
		translates = translates[part];
	}

	return translates;
	
}