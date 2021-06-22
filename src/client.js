import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
	dataset: process.env.SANITY_STUDIO_API_DATASET,
	useCdn: true,
})
