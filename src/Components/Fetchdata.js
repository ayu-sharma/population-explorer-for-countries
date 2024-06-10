import React, { useState, useEffect } from 'react';
import { getData } from './Api/Listapi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Fetchdata({searchTerm}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getData();
        setPosts(postsData);
        // console.log("Posts data:", postsData);
        // console.log("Popupation", postsData.populationCounts)
      } catch (error) {
        // console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log("this is data", posts);

  return (
<TableContainer component={Paper} >
<Table sx={{ minWidth: 320 }} size="small" aria-label="a dense table">
        <TableHead style={{padding: "20rem"}}>
          <TableRow>
            <TableCell>
            <span style={{ fontWeight: 'bold', fontSize: "20px"  }}>CITY</span>
              </TableCell>
            <TableCell align="right">
              <span style={{ fontWeight:'bold', fontSize: "20px"}}>POPULATION</span>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPosts.map((post, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row"
              style={{maxWidth: "200px", wordWrap: "break-word" }}>
                {post.city}
              </TableCell>
              
              <TableCell align="right">{post.populationCounts.length > 0 ? post.populationCounts[0].value : 'Unknown'}</TableCell> 
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Fetchdata;
