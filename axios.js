const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('http://ndof-trip-execution-feature-push.p1302947080.scus-dev-a2.cluster.k8s.us.walmart.net/heartbeat').then(response => {
        console.log(response.status);
        console.log(response.data);
    });
};

const sendData = () => {
    axios.patch(
        'http://ndof-trip-execution-feature-push.p1302947080.scus-dev-a2.cluster.k8s.us.walmart.net/trip-execution/trip',
        [{"tripId": "MSG-ID-OF-PBYL-TESTING-ID-FOR-PB1609", "tripStatus": "IN_PROGRESS"}],
        {
            headers: {
                'facilityCountryCode': 'US',
                'facilityNum': '32987',
                'WMT-UserId': 'a0s01hy',
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => {
            console.log(response.data);
            console.log(response.status);
        })
        .catch(err => {
            console.log(err, err.response);
        });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
