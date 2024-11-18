import './App.css';
import imagenes1 from './imagenes/Recurso 1.png';
import imagenes2 from './imagenes/Recurso 2.png';
import imagenes3 from './imagenes/Recurso 3.png';
import imagenes4 from './imagenes/Recurso 1.png';
import imagenes5 from './imagenes/Recurso 2.png';

function App() { 

  return (
      <div className='cuadroSuperior'>
      <div className="centrado-container">
      <div className="cuadro_corto"></div>
      <div className="cuadro_largo"></div>
      </div>


    <div className="Texto_Central1">
      <h1>SICRP</h1>
    </div>
    
      <div className="Texto_Central2">
        <p>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>
      </div>
    
    
  <div className="Relleno">   
    <div className="Cuadro_Imput">
          <label>
          <input name="C1" placeholder="ID PATRULLA"/>
          </label>
    </div>
            
    <div className="Cuadro_Imput2">
          <label >
          <input name="C2" placeholder="CUADRANTE" />
          </label>
    </div>

      <div>
        <button className="boton_Ingresar">
          Ingresar
        </button>
    </div>
  </div> 


      <div className="linea"> </div>

      <div className ="linea2"> </div>

    


      <img src={imagenes1} alt="Patrulla" className="Imagen1" style={{ width: '450px', height: 'auto' }} />
      <img src={imagenes2} alt="Patrulla" className="Imagen2" style={{ width: '100px', height: 'auto' }} />
 

    








{/*-----------------------------------------------------------------------------------------SEGUNDA PAGINA----------------------------------------------------------------------------------------*/}


<div className="centrado-container">
      <div className="cuadro_corto2"></div>
      <div className="cuadro_largo2"></div>

    <div className="cuadro_menu"></div>
    <div className="cuadro_margen"></div>
    
   

    <img src={imagenes3} alt="Patrulla" className="Logo1" style={{ width: '60px', height: 'auto' }} />
    <div className="inicio">INICIO</div>

    <img src={imagenes3} alt="Patrulla" className="Logo2" style={{ width: '60px', height: 'auto' }} />
    <div className="reporte">REPORTE CUADRANTE</div>

    <img src={imagenes3} alt="Patrulla" className="Logo3" style={{ width: '60px', height: 'auto' }} />
    <div className="cuadrante">CUADRANTE</div>

    <img src={imagenes3} alt="Patrulla" className="Logo4" style={{ width: '60px', height: 'auto' }} />
    <div className="patrullas">PATRULLAS</div>

  <img src={imagenes4} alt="Patrulla" className="Imagen4" />

    <img src={imagenes5} alt="Patrulla" className="Imagen5" />

</div>


{/*---------------------------------------------------------------------------------------TERCERA PAGINA------------------------------------------------------------------------------------------*/}


<div className="centrado-container">
      <div className="cuadro_corto3"></div>
      <div className="cuadro_largo3"></div>


      <div className="cuadro_menu2"></div>
    
    
   

    <img src={imagenes3} alt="Patrulla" className="Logo5" style={{ width: '60px', height: 'auto' }} />
    <div className="inicio2">INICIO</div>

    <img src={imagenes3} alt="Patrulla" className="Logo6" style={{ width: '60px', height: 'auto' }} />
    <div className="reporte2">REPORTE CUADRANTE</div>

    <img src={imagenes3} alt="Patrulla" className="Logo7" style={{ width: '60px', height: 'auto' }} />
    <div className="cuadrante2">CUADRANTE</div>

    <img src={imagenes3} alt="Patrulla" className="Logo8" style={{ width: '60px', height: 'auto' }} />
    <div className="patrullas2">PATRULLAS</div>

    

    <div className="cuadro_margen2">

    <img src={imagenes4} alt="Patrulla" className="Imagen6"style={{ width: '600px', height: 'auto' }} />

    <div className= "Tabla">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PATRULLA</th>
            <th>CUADRANTE</th>
            <th>UBICACIÓN</th>
            <th>RECORRIDO</th>
          </tr>
        </thead>

   

    <div className="Borde_Margen"></div>



      </table>
      </div>
      <img src={imagenes5} alt="Patrulla" className="Imagen7" />
      </div>

</div>

{/*Div Papá*/}
</div>
  );
}

export default App;