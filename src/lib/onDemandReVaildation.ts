export default async function onDemandReValidation() {
    await fetch("http://localhost:3000/api/revalidate?path=/&secret=secret_token")
}