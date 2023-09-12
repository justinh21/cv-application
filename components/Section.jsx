import '../styles/Section.css';
import { useState } from 'react';

function Field({title, item, onSave, onDelete}) {
    const [editing, setEditing] = useState(false);

    function onClick(e) {
        if (editing) {
            onSave(e)
            setEditing(false);
        } else {
            setEditing(true);
        }
    }

        {
            if (editing) {
                return (
                    <div className='field'>
                        <form className='field-form'>
                            <div className='field-title-date'>
                                <input type='text' id='title' defaultValue={item.title}/>
                                <input type='text' id='startDate' defaultValue={item.startDate}/>
                            </div>
                            <input type='text' id='details' defaultValue={item.details}/>
                            <button type='submit' id={`${title}` + `-` + `${item.id}`} className='save' onClick={onClick}>Save</button>
                        </form>
                    </div>
                )
            } return (
                <div className='field'>
                    <div className='field-title-date'>
                        <b>{item.title}</b>
                        ({item.startDate})
                    </div>
                    {item.details}
                    <div className='edit-delete-buttons'>
                        <button id={item.id} className='edit' onClick={onClick}>Edit</button>
                        <button id={`${title}` + `-` + `${item.id}` + `-` + `delete`} className='delete' onClick={onDelete}>Delete</button>
                    </div>
                </div>
            )
        }

}

export default function Section({title, data, onSave, onAdd, onDelete}) {

    return (
        <div className='section'>
        <h1 className='section-title'>{title}</h1>
        {data.map((item) => {
            return (
                <Field title={title} item={item} onSave={onSave} onDelete={onDelete}/>
            )
        }
        )}
        <button id={title} onClick={onAdd} className='add'>Add</button>
        </div>
    )
}