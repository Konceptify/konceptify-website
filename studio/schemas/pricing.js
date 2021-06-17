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
			title: 'Price Month',
			name: 'priceMonth',
			type: 'number',
		},
		{
			title: 'Price Anual',
			name: 'priceAnual',
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
