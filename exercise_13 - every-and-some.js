const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];
// ถ้ามี request ใดๆ ที่มี status เป็น pending ให้ return true
const inProgress = requests.some(request => request.status === 'pending');
console.log(inProgress);

const inProgress1 = requests.some(function (request) {
  return request.status === 'complete';
});
console.log(inProgress1);

const inProgress2 = requests.some(function (request) {
  return request.status === 'failed';
});
console.log(inProgress2);
