export default {
	name: 'pricingBenefits',
	title: 'Pricing Benefits',
	type: 'document',
	fields: [
		{
			title: 'Legend',
			name: 'legend',
			type: 'string',
		},
		{
			title: 'Header',
			name: 'header',
			type: 'string',
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'Names',
			name: 'names',
			type: 'array',
			of: [{ type: 'string' }],
		},
	],
}
