document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const joinQueueBtn = document.getElementById('joinQueueBtn');
    const leaveQueueBtn = document.getElementById('leaveQueueBtn');
    const queueList = document.getElementById('queue-list');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const res = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (res.status === 200) {
                document.getElementById('auth').style.display = 'none';
                document.getElementById('queue').style.display = 'block';
                loadQueue();
            } else {
                const errorData = await res.json();
                alert('Login failed: ' + errorData.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Login failed: An error occurred');
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const passwordConfirm = document.getElementById('register-password-confirm').value;

        try {
            const res = await fetch('/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, passwordConfirm })
            });

            if (res.status === 201) {
                alert('Registration successful');
            } else {
                const errorData = await res.json();
                alert('Registration failed: ' + errorData.message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Registration failed: An error occurred');
        }
    });

    joinQueueBtn.addEventListener('click', async () => {
        const res = await fetch('/queue/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: 1, queueName: 'default' }) // Replace with dynamic user ID and queue name
        });

        if (res.status === 200) {
            loadQueue();
        } else {
            alert('Failed to join queue');
        }
    });

    leaveQueueBtn.addEventListener('click', async () => {
        const res = await fetch('/queue/leave', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: 1 }) // Replace with dynamic user ID
        });

        if (res.status === 200) {
            loadQueue();
        } else {
            alert('Failed to leave queue');
        }
    });

    const loadQueue = async () => {
        const res = await fetch('/queue/get');
        const queue = await res.json();
        queueList.innerHTML = '';
        queue.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `User ID: ${item.user_id}`;
            queueList.appendChild(li);
        });
    };
});
