<script>
    import { Text } from "@geist-ui/core";
    </script>
<div id="footer">
    
    <img src="/bottom.svg" alt="" srcset="">
        
        <react:Text small type="secondary">Veriler T.C. İçişleri Bakanlığı Afet Ve Acil Durum Yönetimi Başkanlığı tarafından sağlanmaktadır.</react:Text>
        <react:Text small type="secondary">Bu platform kar amacı gütmeden imece usulu bilgi paylaşımı için geliştirilmiştir. Hiçbir kurum ve kuruluşla ilişiği yoktur.</react:Text>
        <react:Text small type="secondary">Copyright © 2023 Türkiye Ulusal Afet Bilgi Sistemi</react:Text>

</div>

<style>
    #footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 176px;
        color: white;
       display: flex;
       flex-direction: column;
         justify-content: center;
     align-items: center;
    margin-bottom: 64px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    }
    #footer img {
        margin-top: 32px;
        width: 100%;
        height: 100%;
    }
</style>