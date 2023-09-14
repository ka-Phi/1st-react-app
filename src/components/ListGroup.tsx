function ListGroup() {
    const items = [
        'DJAKARTA',
        'BOGOR',
        'DEPOK',
        'TANGGERANG',
        'BEKASI',
    ];
    return ( /// 33:16
        <>
            <h1>LIST GROUP</h1>
            <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
