import { OptionsWithUri } from 'request';

import { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-core';

import { IDataObject, IHookFunctions, IWebhookFunctions, JsonObject, NodeApiError } from 'n8n-workflow';

export async function citrixADCApiRequest(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	method: string,
	resource: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> { // tslint:disable-line:no-any

	const {username, password, url} = await this.getCredentials('citrixADCApi') as IDataObject;

	let options: OptionsWithUri = {
		headers: {
			'Content-Type': 'application/json',
			'X-NITRO-USER': username,
			'X-NITRO-PASS': password,
		},
		method,
		body,
		qs,
		uri: uri || `${url}/nitro/v1${resource}`,
		json: true,
	};

	options = Object.assign({}, options, option);

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}