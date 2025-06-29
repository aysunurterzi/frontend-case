import { UserFormData } from '../types';

export class UserService {
    static createUser(userData: UserFormData): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

    static getUserData(): UserFormData | null {
        const stored = localStorage.getItem('userData');
        return stored ? JSON.parse(stored) : null;
    }

    static saveUserData(userData: UserFormData): void {
        localStorage.setItem('userData', JSON.stringify(userData));
    }
} 