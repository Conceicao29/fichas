function New() {
    return (
      <div>
        <form>
                <label >Nome Completo:</label><br></br>
                <input type="text" name="nome"></input><br></br>
                <label >Data de nascimento:</label><br></br>
                <input type="date" name="data"></input><br></br>
                <label >Email:</label><br></br>
                <input type="email" name="email"></input><br></br>
                <label >Telemovel:</label><br></br>
                <input type="number" name="telemovel"></input><br></br>
                <label >Submeter:</label><br></br>
                <input type="submit" name="submeter"></input><br></br>
        </form> 
        </div>
  );
}

export default New;