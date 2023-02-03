import { motion } from "framer-motion" 

export default function  DogCard(props){
    return(
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className="card">
            <div>{props.fact}</div>

            
        </motion.div>
    )
    
}