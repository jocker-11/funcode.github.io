const bubbleContainer = document.getElementById('bubble-container');
        const maxBubbles = 10;
        const maxWidth = window.innerWidth - 200;  // Consider bubble width
        const maxHeight = window.innerHeight - 200; // Consider bubble height

        for (let i = 0; i < maxBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Set random position within the viewport
            const randomX = Math.random() * maxWidth;
            const randomY = Math.random() * maxHeight;
            bubble.style.left = `${randomX}px`;
            bubble.style.top = `${randomY}px`;

            // Add random number of spans (1 to 5)
            const spanCount = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < spanCount; j++) {
                const span = document.createElement('span');
                bubble.appendChild(span);
            }

            // Append the bubble to the container
            bubbleContainer.appendChild(bubble);
        }