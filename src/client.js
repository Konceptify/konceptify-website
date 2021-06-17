import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'bg3huwol',
	dataset: 'production',
	useCdn: true,
})
