import React from 'react';
import book from "../assets/book.png";
import image5 from '../assets/image 5.svg';
import Vector4 from '../assets/Vector 4.svg';
import Vector5 from '../assets/Vector 5.svg';
import Vector6 from '../assets/Vector 6.svg'
import Navbar from './Navbar';



function Home() {
  return (
    <section className='flex flex-col justify-center items-center lg:h-screen landing-intro'>
      <Navbar />
      <div className='flex flex-col justify-center items-center container md:flex-row-reverse lg:flex-row-reverse '>
        <div className='w-[260px] lg:w-[350px] lg:mt-[80px] mt-[100px]'>
          <img src={book} />
        </div>

        <div className=' flex flex-col justify-center items-center md:mt-[100px] '>
          <div className='wrapper'>
            <h1 className=' text-3xl text-white md:ml-[100px] mt-4 refugee'>
              <span className='ml-[50px] lg:ml-[90px]'>I AM REFUGEE</span>
              <span className='ml-[100px] lg:ml-[155px]' >من مهاجر هستم</span>
              <span className='ml-[130px] lg:ml-[250px]' >أنا لاجئ</span>
              <span className='ml-[60px] lg:mr-[50px]'>ESTOU REFUGIADO</span>
              <span className='ml-[100px] lg:ml-[150px]' >Я біженець</span>
            </h1>
          </div>
          
                    <p className=' w-[200px] lg:w-[430px] text-center text-[12px] lg:text-[14px] text-white md:text-right lg:text-right ml-[100px] mr-[100px]'>
                          A Coleção Estou Refugiado reúne uma série de obras desenvolvidas pelo Instituto Estou Refugiado,
                          com o objetivo de trazer à luz os dramas e as alegrias,
                            a realidade e os sonhos desses seres humanos que chegam ao Brasil em busca de melhores condições de vida,
                            mas principalmente de liberdade e de dignidade.
        
                            Não por acaso este livro de estreia da Coleção reúne apenas vozes femininas.
                              Porque acreditamos que é feminina a principal força motriz da sobrevivência dos grupos de refugiados.
                              Uma força de onde ao mesmo tempo emana uma sensibilidade capaz de reunir em suas vozes as aspirações dos demais,
                                em suas histórias o passado, o presente e o futuro de todos.
                    </p>
         
          <div className=' flex flex-row gap-10 mt-[100px]'>
            <img src={image5} style={{ width: 100 }} />
            <button  className='text-white p-3' id='btn' ><a href='mailto:colecao@estourefugiado.org.br'> PRÉ VENDA </a></button>

          </div>
        </div>

      </div>
      <div className='w-[50px] flex flex-col absolute z-50 lg:mt-[-80px] mt-[-300px] ' id='vector'>
            <a href='https://www.instagram.com/estourefugiado/'> <img src={Vector4} className="m-[5px]"  /> </a>
            <a href='https://www.facebook.com/estourefugiado'> <img src={Vector6} className="m-[5px]" /> </a>
            <a href='https://www.linkedin.com/company/estourefugiado/'><img src={Vector5} className="m-[5px]" /> </a> 
          </div>
    </section>

  )
}

export default Home;

