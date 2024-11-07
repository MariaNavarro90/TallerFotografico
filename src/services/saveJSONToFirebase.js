import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from '../assets/mockData.json'

const saveJSONToFirebase = async () => {
    try {    
        products.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: product.title,
                price: product.price,
                description: product.description,
                pictureUrl: product.pictureUrl,
                stock: product.stock || 1
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveJSONToFirebase;