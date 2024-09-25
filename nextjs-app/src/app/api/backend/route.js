// import axios from 'axios';

// export async function GET() {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/data');
//     return new Response(JSON.stringify(response.data), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error('Error connecting to FastAPI:', error);
//     return new Response(JSON.stringify({ error: 'Failed to connect to FastAPI' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }