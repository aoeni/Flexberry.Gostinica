﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gostinica
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Штат распис.
    /// </summary>
    // *** Start programmer edit section *** (ШтатРаспис CustomAttributes)

    // *** End programmer edit section *** (ШтатРаспис CustomAttributes)
    [AutoAltered()]
    [Caption("Штат распис")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ШтатРасписE", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Период as \'Период\'",
            "Гостиница as \'Гостиница\'",
            "Гостиница.Наименование as \'Наименование\'",
            "ТЧШтатРасп as \'Т ч штат расп\'",
            "ТЧШтатРасп.Надбавки as \'Надбавки\'",
            "Персонал as \'Персонал\'",
            "Персонал.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Гостиница.Наименование",
            "ТЧШтатРасп.Надбавки",
            "Персонал.ФИО"})]
    [MasterViewDefineAttribute("ШтатРасписE", "Гостиница", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ШтатРасписE", "ТЧШтатРасп", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Надбавки")]
    [MasterViewDefineAttribute("ШтатРасписE", "Персонал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ШтатРасписL", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'",
            "Период as \'Период\'",
            "Гостиница.Наименование as \'Наименование\'",
            "ТЧШтатРасп.Надбавки as \'Надбавки\'",
            "Персонал.ФИО as \'ФИО\'"})]
    public class ШтатРаспис : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомер;
        
        private System.DateTime fПериод;
        
        private IIS.Gostinica.Гостиница fГостиница;
        
        private IIS.Gostinica.ТЧШтатРасп fТЧШтатРасп;
        
        private IIS.Gostinica.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (ШтатРаспис CustomMembers)

        // *** End programmer edit section *** (ШтатРаспис CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.Дата CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.Дата Get start)

                // *** End programmer edit section *** (ШтатРаспис.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ШтатРаспис.Дата Get end)

                // *** End programmer edit section *** (ШтатРаспис.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.Дата Set start)

                // *** End programmer edit section *** (ШтатРаспис.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ШтатРаспис.Дата Set end)

                // *** End programmer edit section *** (ШтатРаспис.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.Номер CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.Номер Get start)

                // *** End programmer edit section *** (ШтатРаспис.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ШтатРаспис.Номер Get end)

                // *** End programmer edit section *** (ШтатРаспис.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.Номер Set start)

                // *** End programmer edit section *** (ШтатРаспис.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ШтатРаспис.Номер Set end)

                // *** End programmer edit section *** (ШтатРаспис.Номер Set end)
            }
        }
        
        /// <summary>
        /// Период.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.Период CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.Период CustomAttributes)
        public virtual System.DateTime Период
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.Период Get start)

                // *** End programmer edit section *** (ШтатРаспис.Период Get start)
                System.DateTime result = this.fПериод;
                // *** Start programmer edit section *** (ШтатРаспис.Период Get end)

                // *** End programmer edit section *** (ШтатРаспис.Период Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.Период Set start)

                // *** End programmer edit section *** (ШтатРаспис.Период Set start)
                this.fПериод = value;
                // *** Start programmer edit section *** (ШтатРаспис.Период Set end)

                // *** End programmer edit section *** (ШтатРаспис.Период Set end)
            }
        }
        
        /// <summary>
        /// Штат распис.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.Гостиница CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.Гостиница CustomAttributes)
        [PropertyStorage(new string[] {
                "Гостиница"})]
        [NotNull()]
        public virtual IIS.Gostinica.Гостиница Гостиница
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.Гостиница Get start)

                // *** End programmer edit section *** (ШтатРаспис.Гостиница Get start)
                IIS.Gostinica.Гостиница result = this.fГостиница;
                // *** Start programmer edit section *** (ШтатРаспис.Гостиница Get end)

                // *** End programmer edit section *** (ШтатРаспис.Гостиница Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.Гостиница Set start)

                // *** End programmer edit section *** (ШтатРаспис.Гостиница Set start)
                this.fГостиница = value;
                // *** Start programmer edit section *** (ШтатРаспис.Гостиница Set end)

                // *** End programmer edit section *** (ШтатРаспис.Гостиница Set end)
            }
        }
        
        /// <summary>
        /// Штат распис.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.Персонал CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.Gostinica.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.Персонал Get start)

                // *** End programmer edit section *** (ШтатРаспис.Персонал Get start)
                IIS.Gostinica.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (ШтатРаспис.Персонал Get end)

                // *** End programmer edit section *** (ШтатРаспис.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.Персонал Set start)

                // *** End programmer edit section *** (ШтатРаспис.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (ШтатРаспис.Персонал Set end)

                // *** End programmer edit section *** (ШтатРаспис.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Штат распис.
        /// </summary>
        // *** Start programmer edit section *** (ШтатРаспис.ТЧШтатРасп CustomAttributes)

        // *** End programmer edit section *** (ШтатРаспис.ТЧШтатРасп CustomAttributes)
        [PropertyStorage(new string[] {
                "ТЧШтатРасп"})]
        [NotNull()]
        public virtual IIS.Gostinica.ТЧШтатРасп ТЧШтатРасп
        {
            get
            {
                // *** Start programmer edit section *** (ШтатРаспис.ТЧШтатРасп Get start)

                // *** End programmer edit section *** (ШтатРаспис.ТЧШтатРасп Get start)
                IIS.Gostinica.ТЧШтатРасп result = this.fТЧШтатРасп;
                // *** Start programmer edit section *** (ШтатРаспис.ТЧШтатРасп Get end)

                // *** End programmer edit section *** (ШтатРаспис.ТЧШтатРасп Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ШтатРаспис.ТЧШтатРасп Set start)

                // *** End programmer edit section *** (ШтатРаспис.ТЧШтатРасп Set start)
                this.fТЧШтатРасп = value;
                // *** Start programmer edit section *** (ШтатРаспис.ТЧШтатРасп Set end)

                // *** End programmer edit section *** (ШтатРаспис.ТЧШтатРасп Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ШтатРасписE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ШтатРасписE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ШтатРасписE", typeof(IIS.Gostinica.ШтатРаспис));
                }
            }
            
            /// <summary>
            /// "ШтатРасписL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ШтатРасписL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ШтатРасписL", typeof(IIS.Gostinica.ШтатРаспис));
                }
            }
        }
    }
}
