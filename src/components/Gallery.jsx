import MyCard from './MyCard'

const Gallery = ({ dogs }) => {
    return (
      <section className="gallery">
        <MyCard dogs={dogs[0]} />
        <MyCard dogs={dogs[1]} />
        <MyCard dogs={dogs[2]} />
        <MyCard dogs={dogs[3]} />
      </section>
    );
  };
  
  export default Gallery;