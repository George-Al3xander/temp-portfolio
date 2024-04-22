import { useQuery } from "@tanstack/react-query"
import {  getDocs,where,query} from 'firebase/firestore';
import {getDownloadURL, listAll, ref} from "firebase/storage"
import {  projectsCollectionRef, storage } from "../firebase-config";
import { useState } from "react";
import { project } from "../types/types";

const useProjects = () => {
    const imageListRef = ref(storage, "images/");
    const [images,setImages] = useState<{[key: string]: string}>({})

    const getProjects = async() => {
        const snapshots  = await getDocs(query(projectsCollectionRef,/*orderBy("timestamp","desc"),*/ where("isHidden", "==", false)))
       // const snapshots  = await getDocs(projectsCollectionRef)
        const res  = snapshots.docs.map((doc) => ({...doc.data(), id: doc.id}));    
        const imagesDb  = await listAll(imageListRef);

        for(const doc of res) {
            const image = imagesDb.items.find((img) =>  img.name.split(".")[0] == doc.id)
            const url = await getDownloadURL(image!);
            setImages((prev) => ({...prev,[doc.id]: url}))
        }
        return res as project[]
    }

    const data = useQuery({queryKey: ["projects", "hook", "firebase"], queryFn: getProjects,refetchOnWindowFocus: false})
    return {...data, images}
}


export default useProjects