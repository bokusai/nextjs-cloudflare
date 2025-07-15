

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ zipcode: string }>;
}) {
	const { zipcode } = await searchParams;
	console.log("searchParams", zipcode);

	return <div>Zipcode: {zipcode}</div>;
}
