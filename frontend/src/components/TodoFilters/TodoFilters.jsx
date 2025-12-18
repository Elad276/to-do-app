import styles from './TodoFilters.module.css'
import { useState } from 'react';
import { COMPLETED_FILTERS, PRIORITY_FILTERS } from '../constants/filters';
import { useEffect } from 'react';

export function TodoFilters({ onFilter }) {
    const [completed, setCompleted] = useState('all');
    const [priority, setPriority] = useState('all');

    useEffect(() => {
        const filter = {
            completed: COMPLETED_FILTERS[completed].value,
            priority: PRIORITY_FILTERS[priority].value,
        }
        onFilter(filter);
    }, [completed, priority]);


    return (
        <section>
            <h3>Filters</h3>
            <div className={styles.Filters}>

                {/* Completed filter */}
                <label htmlFor="completed">Completed</label>
                <select
                    id="completed"
                    defaultValue={completed}
                    onChange={(event) => setCompleted(event.target.value)}
                >
                    {Object.entries(COMPLETED_FILTERS).map(([key, { label }]) => (
                        <option key={key} value={key}> {label}</option>
                    ))}
                </select>

                {/* Priority filter */}
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    defaultValue={priority}
                    onChange={(event) => setPriority(event.target.value)}
                >
                    {Object.entries(PRIORITY_FILTERS).map(([key, { label }]) => (
                        <option key={key} value={key}> {label}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}