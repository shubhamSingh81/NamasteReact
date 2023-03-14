import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            {isVisible ? (<button className="font-bold" onClick={() => setIsVisible(false)} >Hide</button>) : (<button className="font-bold" onClick={() => setIsVisible(true)} >Show</button>)}
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const InstaMart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
            <Section
                title={"About Instamart"}
                description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
                isVisible={isVisibleSection==="about"}
                setIsVisible={() => setIsVisibleSection("about")}
            />
            <Section
                title={"Team Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}
                isVisible={isVisibleSection==="team"}
                setIsVisible={() => setIsVisibleSection("team")}

            />
            <Section
                title={"Carrier Instamart"}
                description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32."}
                isVisible={isVisibleSection==="carrier"}
                setIsVisible={() => setIsVisibleSection("carrier")}

            />
            {/* <AboutInstaMart/>
            <DetalsOfInstaMart/>
            <TeamInstaMart/>
            <ProductInstaMart/>
            <CarrierInstaMart/> */}
        </div>
    )
}

export default InstaMart;
