'use client';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import {use} from 'react';
import { sculptureList } from "../../data/list.js";

export default function GalleryItem({params}){
  // get the param from the url
  // 'http://localhost/gallery/1'
  // useParams => 1
  const { id } = use(params)

  const sculpture = sculptureList.find((item) => item.id == id);

  if (!sculpture) {
    notFound();
  }
  // render template
  return (
    <div className="box mt-1">
      {sculpture ? (
        <>
          <h2 className="title is-5">
            <i>{sculpture.name}</i> by {sculpture.artist}
          </h2>
          <h3 className="subtitle is-6">
            ({sculpture.id + 1} of {sculptureList.length})
          </h3>
          <Image
            src={sculpture.url}
            alt={sculpture.alt}
            width={400}
            height={200}
            />
          <p>{sculpture.description}</p>
        </>
      ) : (
        <p> Item not found</p>
      )}
    </div>
  );
};