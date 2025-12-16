import styles from './TodoFormFields.module.css';
import { PRIORITIES, PRIORITY_DEFAULT } from "../constants/priorities";



export function TodoFormFields({ todo = {}, showAllFields = true, register, errors = {} }) {
    return (
        <div className={styles.FormFields}>
            <div className={styles.FormFields}>
                <input
                    type="text"
                    placeholder="Task name"
                    autoComplete='off'
                    defaultValue={todo.name}
                    aria-invalid={!!errors.name}
                    {...register('name')}
                />
                {!!errors.name && (
                    <p className={styles.FormFieldError}>
                        {errors.name.message}</p>
                )}
            </div>

            {showAllFields && (
                <>
                    <div className={styles.FormFields}>
                        <textarea
                            placeholder="Task description"
                            rows={3}
                            defaultValue={todo.description}
                            aria-invalid={!!errors.description}
                            {...register('description')}/>
                        {!!errors.description && (
                            <p className={styles.FormFieldError}>
                                {errors.description.message}</p>
                        )}
                    </div>

                    <div className={styles.FormGroup}>
                        <div className={styles.FormField}>
                            <label htmlFor="deadline">Deadline</label>
                            <input
                                type="date"
                                id="deadline"
                                defaultValue={todo.deadline}
                                aria-invalid={!!errors.deadline}
                                {...register("deadline")}
                            />
                            {!!errors.deadline &&(                                 <p className={styles.FormFieldError}>
                                    {errors.deadline.message}</p>
                            )}
                        </div>
                        <div className={styles.FormField}>
                            <label htmlFor="priority">Priority</label>
                            <select
                                id="priority"
                                defaultValue={todo.priority ?? PRIORITY_DEFAULT}
                                aria-invalid={!!errors.priority}
                                {...register('priority')}>
                                {Object.entries(PRIORITIES).map(([key, { label }]) => (
                                    <option key={key} value={key}> {label}</option>
                                ))}
                            </select>
                            {!!errors.priority && (
                                <p className={styles.FormFieldError}>
                                    {errors.priority.message}</p>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}