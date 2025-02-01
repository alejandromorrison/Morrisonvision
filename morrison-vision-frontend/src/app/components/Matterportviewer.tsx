interface MatterportViewerProps {
    tourId: string;
  }
  
  const MatterportViewer = ({ tourId }: MatterportViewerProps) => {
    return (
      <div className="flex justify-center items-center h-screen">
        <iframe 
          width="853" 
          height="480" 
          src={`https://my.matterport.com/show/?m=${tourId}`} 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
          className="w-full max-w-4xl h-[480px]"
        />
      </div>
    );
  };
  
  export default MatterportViewer;
  