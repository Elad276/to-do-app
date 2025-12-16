import * as yup from 'yup';
import { PRIORITIES } from '../components/constants/priorities';

export function getTodoSchema({ isNew = false } = {}) {
    const todayStr = new Date().toISOString().split('T')[0];

    return yup.object().shape({
        name: yup.string()
            .required('Task name is required')
            .min(3, 'Task name must be at least 3 characters long')
            .max(30, 'Task name must be at most 30 characters long'),

        description: yup.string().max(50, 'Task description must be at most 50 characters long'),

        deadline: yup.string() // 💡 Treat as string to match your format
            .nullable()
            .test('is-future', 'Deadline must not be in the past', function (value) {
                // 1. If no date is provided (optional), it's valid
                if (!value) return true;

                // 2. If we are EDITING, any date is valid
                if (!isNew) return true;

                // 3. If we are CREATING NEW, compare YYYY-MM-DD strings directly
                // String comparison "2025-12-20" >= "2025-12-16" works perfectly.
                return value >= todayStr;
            }),

        priority: yup.string().oneOf(Object.keys(PRIORITIES), 'Invalid priority'),
    });
}