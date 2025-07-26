export const uploadImage = async (imageData) => {
    const formData = new FormData();
    formData.append("image", imageData);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
        method: "POST",
        body: formData
    })
    const data = await res.json()

    return data;
}