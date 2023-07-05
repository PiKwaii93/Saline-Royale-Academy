import React from "react";

export default class Sub extends React.Component {

    render() {
        const newLocal = <h4>Acces ilimité a nos masterclass</h4>;
        return (
          <div className="Subscribe">
            <h1 className="Title">Nos abonnement</h1>
            <div className="Subscribe-options-panel">
                <div className="Subscribe-options">
                    <h1>Essai gratuit</h1>
                    <div className="Price">
                        <h3>$0</h3><h4>/ Mois</h4>
                    </div>
                    <div className="Avantage">  
                        <h4>Accès limité à nos masterclasses.</h4>
                        <h4>Vidéos multi-angles disponibles en HD surtous vos appareils.</h4>
                        <button>Commencer</button>
                    </div>
                </div>
                <div className="Subscribe-options-mid">
                    <h1>Abonnement annuel</h1>
                    <div className="Total-price">
                        <div className="Price">
                            <h3>$15.9</h3><h4>/ Mois (HT)</h4>
                        </div>
                        <h4>Au lieu de $19.8</h4>
                        <h3>Paiement annuel de $190.8</h3>
                    </div>
                    <div className="Avantage">
                        {newLocal}
                        <h4>De nouvelles vidéos sont disponibles chaque mois</h4>
                        <h4>Des interviews exclusives avec les plus grands professeurs du monde.</h4>
                        <button>Commencer</button>
                    </div>
                </div>
                <div className="Subscribe-options">
                    <h1>Abonnement mensuel</h1>
                    <div className="Price">
                    <h3>$19.8</h3><h4>/ Mois (HT)</h4>
                    </div>
                    <div className="Avantage">
                        {newLocal}
                        <h4>De nouvelles vidéos sont disponibles chaque mois</h4>
                        <h4>Des interviews exclusives avec les plus grands professeurs du monde.</h4>
                        <button>Commencer</button>
                    </div>
                </div>
            </div>
            <div className="Subscribe-options-panel">
              <img src="/Subscribe_img2.png"/>
              <div className="Pourquoi-sub">
                    <h1>Pourquoi s'abonner ?</h1>
                    <h4>Avec l’abonnement, profitez de l’accès au contenu de manière non limitée. Plus de cours, plus de vidéos, plus d’expérience et un apprentissage décuplé.</h4>
              </div>
              <img className="test1" src="/Subscribe_img.png"/>
            </div>
          </div>
        );
    }
}
