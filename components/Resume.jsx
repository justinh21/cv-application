import Header from './Header'
import Section from './Section'
import '../styles/Resume.css'
import initialData from '../src/data'
import { useState } from 'react'
import uniqid from "uniqid";

export default function Resume() {
    const [data, setData] = useState(initialData)

    function addField(e) {
        const section = e.target.id;
        setData({
            ...data,
            sections: {
                ...data.sections,
                [section]: [
                    ...data['sections'][section],
                    {
                        title: "Title",
                        details: "Details",
                        startDate: "Start Date",
                        id: uniqid()
                    }
                ]
            }
        })
    }

    function saveField(e) {
        const section = e.target.id.split("-")[0]
        const id = e.target.id.split("-")[1]

        const idx = data['sections'][section].findIndex((obj => obj.id == id))

        const title = e.target.form[0].value
        const startDate = e.target.form[1].value
        const details = e.target.form[2].value

        let tempArray =  [...data['sections'][section]]
        tempArray[idx].title = `${title}`
        tempArray[idx].startDate = `${startDate}`
        tempArray[idx].details = `${details}`

        setData({
            ...data,
            sections: {
                ...data.sections,
                [section]: tempArray
            }
        })
    }

    function deleteField(e) {
        console.log(data)

        const section = e.target.id.split("-")[0]
        const id = e.target.id.split("-")[1]

        const temp = {
            ...data,
            sections: {
                ...data.sections,
                [section]: data['sections'][section].filter((field) =>
                    field.id !== id
                )
            }
        }

        console.log(temp)

        setData({
            ...data,
            sections: {
                ...data.sections,
                [section]: data['sections'][section].filter((field) =>
                    field.id !== id
                )
            }
        })
    }

    return (
        <div className='resume'>
            <Header userInfo={data.userInfo}/>
            {
                Object.keys(data.sections).map(
                    (section) => <Section title={section} data={data.sections[section]} onSave={saveField} onAdd={addField} onDelete={deleteField}/>
                )
            }
        </div>
    )
}