const delBook = (id) => {
    console.log(id);
    console.log(`/booklist/del/${id}`);
    axios.delete(`/booklist/del/${id}`).then((res) => {
        if (res.data.status === 'success') {
            location.reload();
        }
    });
};

const showUpdateForm = (button) => {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const author = button.getAttribute('data-author');
    const year_published = button.getAttribute('data-year');
    const type = button.getAttribute('data-type');

    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('updateId').value = id;
    document.getElementById('updateName').value = name;
    document.getElementById('updateAuthor').value = author;
    document.getElementById('updateYearPublished').value = year_published;
    document.getElementById('updateType').value = type;
};

const updBook = () => {
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const author = document.getElementById('updateAuthor').value;
    const year_published = document.getElementById('updateYearPublished').value;
    const type = document.getElementById('updateType').value;

    console.log('update');
    console.log(`/booklist/upd/${id}`);
    axios
        .put(`/booklist/upd/${id}`, {
            name: name,
            author: author,
            year_published: year_published,
            type: type,
        })
        .then((res) => {
            if (res.data.status === 'success') {
                location.reload();
            }
        });
};
