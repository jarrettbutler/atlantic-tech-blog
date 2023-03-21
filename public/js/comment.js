const newCommentHandler = async (event) => {
    event.preventDefalut();

    const comment = document.querySelector('#comment-name').value.trim();

    if (comment) {
        const response = await fetch(`/api/posts`, {
          method: 'POST',
          body: JSON.stringify({ comment }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create comment');
        }
      }
    };