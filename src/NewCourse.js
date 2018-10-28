import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';


export default function () {

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null
  });

  const changeHandler = (key, value) =>
    setForm({ ...form, [key]: value });




  return (
    <form>
      <input type="text" placeholder="Name" onChange={e => changeHandler("name", e.target.value)} value={form.name} />
      <input type="text" placeholder="Description" onChange={e => changeHandler("description", e.target.value)} value={form.description} />
      <UploadImage image={form.image} setImage={file => changeHandler("image", file)} />
    </form>
  );
}

function UploadImage({image, setImage}) {

  const [src, setSrc] = useState();

  useEffect(() => {
    if (image && !src) {
      const promise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result));
        reader.readAsDataURL(image);
      });

      promise.then(res => setSrc(res));
    }

  }, [image]);

  const Image = () =>
    src ? <img src={src} style={{width: 200}} alt="hi" /> : <Loader type="line-scale" color="#222" />;

  return image ? <Image /> : <input type="file" onChange={e => setImage(e.target.files[0])} />;

}