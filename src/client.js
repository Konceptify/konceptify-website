import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: process.env.REACT_APP_SANITY_STUDIO_API_PROJECT_ID,
	dataset: process.env.REACT_APP_SANITY_STUDIO_API_DATASET,
	useCdn: true,
})
