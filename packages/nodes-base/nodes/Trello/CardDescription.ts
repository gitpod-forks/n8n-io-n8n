import {
	INodeProperties,
} from 'n8n-workflow';

export const cardOperations: INodeProperties[] = [
	// ----------------------------------
	//         card
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'card',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new card',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a card',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get the data of a card',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a card',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

export const cardFields: INodeProperties[] = [
	// ----------------------------------
	//         card:create
	// ----------------------------------
	{
		displayName: 'List ID',
		name: 'listId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The ID of the list to create card in',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		placeholder: 'My card',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The name of the card',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The description of the card',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'card',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Due Date',
				name: 'due',
				type: 'dateTime',
				default: '',
				description: 'A due date for the card',
			},
			{
				displayName: 'Due Complete',
				name: 'dueComplete',
				type: 'boolean',
				default: false,
				description: 'If the card is completed',
			},
			{
				displayName: 'Position',
				name: 'pos',
				type: 'string',
				default: 'bottom',
				description: 'The position of the new card. top, bottom, or a positive float.',
			},
			{
				displayName: 'Member IDs',
				name: 'idMembers',
				type: 'string',
				default: '',
				description: 'Comma-separated list of member IDs to add to the card',
			},
			{
				displayName: 'Label IDs',
				name: 'idLabels',
				type: 'string',
				default: '',
				description: 'Comma-separated list of label IDs to add to the card',
			},
			{
				displayName: 'URL Source',
				name: 'urlSource',
				type: 'string',
				default: '',
				description: 'A source URL to attach to card',
			},
			{
				displayName: 'Source ID',
				name: 'idCardSource',
				type: 'string',
				default: '',
				description: 'The ID of a card to copy into the new card',
			},
			{
				displayName: 'Keep from source',
				name: 'keepFromSource',
				type: 'string',
				default: 'all',
				description: 'If using idCardSource you can specify which properties to copy over. all or comma-separated list of: attachments, checklists, comments, due, labels, members, stickers.',
			},
		],
	},

	// ----------------------------------
	//         card:delete
	// ----------------------------------
	{
		displayName: 'Card ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'delete',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The ID of the card to delete',
	},

	// ----------------------------------
	//         card:get
	// ----------------------------------
	{
		displayName: 'Card ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The ID of the card to get',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'card',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: 'all',
				description: 'Fields to return. Either "all" or a comma-separated list: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url.',
			},
			{
				displayName: 'Board',
				name: 'board',
				type: 'boolean',
				default: false,
				description: 'Whether to return the board object the card is on',
			},
			{
				displayName: 'Board Fields',
				name: 'board_fields',
				type: 'string',
				default: 'all',
				description: 'Fields to return. Either "all" or a comma-separated list: name, desc, descData, closed, idOrganization, pinned, url, prefs.',
			},
			{
				displayName: 'Custom Field Items',
				name: 'customFieldItems',
				type: 'boolean',
				default: false,
				description: 'Whether to include the customFieldItems',
			},
			{
				displayName: 'Members',
				name: 'members',
				type: 'boolean',
				default: false,
				description: 'Whether to return member objects for members on the card',
			},
			{
				displayName: 'Member Fields',
				name: 'member_fields',
				type: 'string',
				default: 'all',
				description: 'Fields to return. Either "all" or a comma-separated list: avatarHash, fullName, initials, username.',
			},
			{
				displayName: 'Plugin Data',
				name: 'pluginData',
				type: 'boolean',
				default: false,
				description: 'Whether to include pluginData on the card with the response',
			},
			{
				displayName: 'Stickers',
				name: 'stickers',
				type: 'boolean',
				default: false,
				description: 'Whether to include sticker models with the response',
			},
			{
				displayName: 'Sticker Fields',
				name: 'sticker_fields',
				type: 'string',
				default: 'all',
				description: 'Fields to return. Either "all" or a comma-separated list of sticker fields.',
			},
		],
	},

	// ----------------------------------
	//         card:update
	// ----------------------------------
	{
		displayName: 'Card ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'card',
				],
			},
		},
		description: 'The ID of the card to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'update',
				],
				resource: [
					'card',
				],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Attachment Cover',
				name: 'idAttachmentCover',
				type: 'string',
				default: '',
				description: 'The ID of the image attachment the card should use as its cover, or null for none',
			},
			{
				displayName: 'Board ID',
				name: 'idBoard',
				type: 'string',
				default: '',
				description: 'The ID of the board the card should be on',
			},
			{
				displayName: 'Closed',
				name: 'closed',
				type: 'boolean',
				default: false,
				description: 'Whether the board is closed',
			},
			{
				displayName: 'Description',
				name: 'desc',
				type: 'string',
				default: '',
				description: 'New description of the board',
			},
			{
				displayName: 'Due Date',
				name: 'due',
				type: 'dateTime',
				default: '',
				description: 'A due date for the card',
			},
			{
				displayName: 'Due Complete',
				name: 'dueComplete',
				type: 'boolean',
				default: false,
				description: 'If the card is completed',
			},
			{
				displayName: 'Label IDs',
				name: 'idLabels',
				type: 'string',
				default: '',
				description: 'Comma-separated list of label IDs to set on card',
			},
			{
				displayName: 'List ID',
				name: 'idList',
				type: 'string',
				default: '',
				description: 'The ID of the list the card should be in',
			},
			{
				displayName: 'Member IDs',
				name: 'idMembers',
				type: 'string',
				default: '',
				description: 'Comma-separated list of member IDs to set on card',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'New name of the board',
			},
			{
				displayName: 'Position',
				name: 'pos',
				type: 'string',
				default: 'bottom',
				description: 'The position of the card. top, bottom, or a positive float.',
			},
			{
				displayName: 'Subscribed',
				name: 'subscribed',
				type: 'boolean',
				default: false,
				description: 'Whether the acting user is subscribed to the board',
			},
		],
	},
];
