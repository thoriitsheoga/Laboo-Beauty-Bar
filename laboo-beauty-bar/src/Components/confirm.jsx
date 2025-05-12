const ConfirmPage = () => {
  const location = useLocation();
  const {
    shape = '',
    shapeOption = '',
    shapePrice = 0,
    decoration = '',
    nailArtCount = 0,
    nailArtPrice = 0,
    totalPrice = 0
  } = location.state || {};

  const [appointmentTime, setAppointmentTime] = useState('');

  const handleBooking = async () => {
    try {
      await axios.post('http://localhost:5000/api/book', {
        shape,
        shapeOption,
        shapePrice,
        decoration,
        nailArtCount,
        nailArtPrice,
        totalPrice,
        appointmentTime
      });
      alert('Booking confirmed!');
    } catch (err) {
      console.error(err);
      alert('Booking failed');
    }
  };

  return (
    <div className="confirm-container">
      <h1>Checkout</h1>
      <div className="checkout-summary">
        <p><strong>Shape:</strong> {shape} - {shapeOption}</p>
        <p><strong>Base Price:</strong> R{shapePrice}</p>
        <p><strong>Decoration:</strong> {decoration}</p>
        <p><strong>Nail Art:</strong> {nailArtCount} nails (R{nailArtPrice})</p>
        <hr />
        <p><strong>Total Price:</strong> R{totalPrice}</p>
      </div>

      <label htmlFor="datetime">Appointment Time:</label>
      <input
        type="datetime-local"
        id="datetime"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
      />

      <button onClick={handleBooking}>Confirm Order</button>
    </div>
  );
};

export default ConfirmPage;