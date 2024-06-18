const delCustomer = (id) => {
    console.log(`/customers/del/${id}`);
    axios.delete(`/customers/del/${id}`).then((res) => {
        if (res.data.status === 'success') {
            location.reload();
        }
    });
};

const showUpdateForm = (button) => {
    const id = button.getAttribute('data-id');
    const name = button.getAttribute('data-name');
    const city = button.getAttribute('data-city');
    const age = button.getAttribute('data-age');

    document.getElementById('updateForm').style.display = 'block';
    document.getElementById('updateId').value = id;
    document.getElementById('updateName').value = name;
    document.getElementById('updateCity').value = city;
    document.getElementById('updateAge').value = age;
};

const updCustomer = () => {
    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const city = document.getElementById('updateCity').value;
    const age = document.getElementById('updateAge').value;

    console.log('update');
    console.log(`/customers/upd/${id}`);
    axios
        .put(`/customers/upd/${id}`, {
            name: name,
            city: city,
            age: age,
        })
        .then((res) => {
            if (res.data.status === 'success') {
                location.reload();
            }
        });
};
