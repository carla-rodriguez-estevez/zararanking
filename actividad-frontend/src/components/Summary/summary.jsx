import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import "./styles.css";

export const Summary = () => {
  const [summary, setSummary] = React.useState('');

  React.useEffect(() => {
    const fetchSummary = async () => {
      const response = await fetch('/report-summary');
      const data = await response.json();

      setSummary(data);
    }

    fetchSummary();

  }, [])

  console.log(summary)


  return (
    <div className='summary-container'>
      <Card className='card-content' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {summary.totalOrders + " pedidos"}
          </Typography>
        </CardContent>
      </Card>

      <Card className='card-content' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {summary.totalProducts + " unidades"}
          </Typography>
        </CardContent>
      </Card>

      <Card className='card-content' sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {summary.totalSales + " importe"}

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}