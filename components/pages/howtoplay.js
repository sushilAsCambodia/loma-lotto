import React from 'react';
import { useTranslation } from "react-i18next";

function Howtoplay() {
    const { t } = useTranslation();
    return (
        <div className="working-process">
            <img src="img/bg-shape/bg-shape-3.png" alt="" className="bg-shape-3" />
            <img src="img/bg-shape/wp-shape-2.png" alt="" className="wp-bg-shape-2" />
            <img src="img/bg-shape/wp-shape-3.png" alt="" className="wp-bg-shape-3" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title">
                            <h3 className="sub-title">{ t('How_to_play') }</h3>
                            <h2 className="title">{ t('Easiest_Way_To_Picking_A_Number') }</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="part-icon">
                                <img src="img/working-process/icon-1.png" alt="" />
                            </div>
                            <div className="part-text">
                                <span className="step-number">1.</span>
                                <span className="step-title">{ t('step_1_heading') }</span>
                                <p>{ t('step_1_tittle') }</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process pp-2">
                            <div className="part-text">
                                <span className="step-title">{ t('step_2_heading') }</span>
                                <p>{ t('step_2_tittle') }</p>
                                <span className="step-number two">2.</span>
                            </div>
                            <div className="part-icon">
                                <img src="img/working-process/icon-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="part-icon">
                                <img src="img/working-process/icon-3.png" alt="" />
                            </div>
                            <div className="part-text">
                                <span className="step-number">3.</span>
                                <span className="step-title">{ t('step_3_heading') }</span>
                                <p>{ t('step_3_tittle') }</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6">
                        <div className="single-process pp-2">
                            <div className="part-text">
                                <span className="step-title">{ t('step_4_heading') }</span>
                                <p>{ t('step_4_tittle') }</p>
                                <span className="step-number four">4.</span>
                            </div>
                            <div className="part-icon">
                                <img src="img/working-process/icon-4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howtoplay;