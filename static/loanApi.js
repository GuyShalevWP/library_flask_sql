const returnBook = (id) => {
    console.log(id);
    axios
        .put(`/loans/return/${id}`)
        .then((res) => {
            if (res.data.status === 'success') {
                location.reload();
            }
        })
        .catch((error) => {
            console.error(error);
        });
};
