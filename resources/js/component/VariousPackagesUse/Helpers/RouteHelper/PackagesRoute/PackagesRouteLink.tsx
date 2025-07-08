import { Packages } from "@/component/VariousPackagesUse/Component/Packages/Packages";
import { getPackagesRouteData } from "./PackagesRouteData";
import { useHelperHook } from "@/component/VariousPackagesUse/Hooks/useHelperHook";
import { getPackagesRouteLoader } from "./PackagesRouteLoader";
import { PackagesContextProvider } from "@/component/VariousPackagesUse/Context/PackagesContext";
import { UiComponentPackage } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/UiComponentPackage";
import { BlueprintJsType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/BlueprintJsType/BlueprintJsType";
import { SpectrumWebComponentsType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/SpectrumWebComponentsType/SpectrumWebComponentsType";
import { ChakraUiType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/ChakraUiType/ChakraUiType";
import { ReactIconType } from "@/component/VariousPackagesUse/Component/Packages/IconPackage/ReactIconType/ReactIconType";
import { IconPackage } from "@/component/VariousPackagesUse/Component/Packages/IconPackage/IconPackage";
import { ReactLoaderSpinnerType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/ReactLoaderSpinnerType/ReactLoaderSpinnerType";
import { ReactSpinnersType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/ReactSpinnersType/ReactSpinnersType";
import { SpinnersReactType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/SpinnersReactType/SpinnersReactType";
import { RespinnerType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/RespinnerType/RespinnerType";
import { RcProgressType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/RcProgressType/RcProgressType";
import { ReactCircularProgressbarType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/ReactCircularProgressbarType/ReactCircularProgressbarType";
import { ReactTopLoadingBarType } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/ReactTopLoadingBarType/ReactTopLoadingBarType";
import { LoaderProgressPackage } from "@/component/VariousPackagesUse/Component/Packages/LoaderProgressPackage/LoaderProgressPackage";
import { ReactPaginateType } from "@/component/VariousPackagesUse/Component/Packages/PaginationPackage/ReactPaginateType/ReactPaginateType";
import { PaginationPackage } from "@/component/VariousPackagesUse/Component/Packages/PaginationPackage/PaginationPackage";
import { MomentType } from "@/component/VariousPackagesUse/Component/Packages/DateTimePackage/MomentType/MomentType";
import { LuxonType } from "@/component/VariousPackagesUse/Component/Packages/DateTimePackage/LuxonType/LuxonType";
import { DateTimePackage } from "@/component/VariousPackagesUse/Component/Packages/DateTimePackage/DateTimePackage";
import { SweetAlertType } from "@/component/VariousPackagesUse/Component/Packages/TostAlertPackage/SweetAlertType/SweetAlertType";
import { ToastifyType } from "@/component/VariousPackagesUse/Component/Packages/TostAlertPackage/ToastifyType/ToastifyType";
import { TostAlertPackage } from "@/component/VariousPackagesUse/Component/Packages/TostAlertPackage/TostAlertPackage";
import { IntersectionObserverType } from "@/component/VariousPackagesUse/Component/Packages/PageScrollPackage/IntersectionObserverType/IntersectionObserverType";
import { SmoothScrollbarType } from "@/component/VariousPackagesUse/Component/Packages/PageScrollPackage/SmoothScrollbarType/SmoothScrollbarType";
import { ReactScrollType } from "@/component/VariousPackagesUse/Component/Packages/PageScrollPackage/ReactScrollType/ReactScrollType";
import { PageScrollPackage } from "@/component/VariousPackagesUse/Component/Packages/PageScrollPackage/PageScrollPackage";
import { AnimateType } from "@/component/VariousPackagesUse/Component/Packages/AnimationPackage/AnimateType/AnimateType";
import { ReactSpringType } from "@/component/VariousPackagesUse/Component/Packages/AnimationPackage/ReactSpringType/ReactSpringType";
import { FramerMotionType } from "@/component/VariousPackagesUse/Component/Packages/AnimationPackage/FramerMotionType/FramerMotionType";
import { AnimeJsType } from "@/component/VariousPackagesUse/Component/Packages/AnimationPackage/AnimeJsType/AnimeJsType";
import { AnimationPackage } from "@/component/VariousPackagesUse/Component/Packages/AnimationPackage/AnimationPackage";
import { StyledComponentsType } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/StyledComponentsType/StyledComponentsType";
import { TailwindType } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/TailwindType/TailwindType";
import { ChromaJsType } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/ChromaJsType/ChromaJsType";
import { ReactGridLayoutType } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/ReactGridLayoutType/ReactGridLayoutType";
import { LayoutStylingPackage } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/LayoutStylingPackage";
import { LogSymbolsType } from "@/component/VariousPackagesUse/Component/Packages/SomeUsefulPackage/LogSymbolsType/LogSymbolsType";
import { FakerJsType } from "@/component/VariousPackagesUse/Component/Packages/SomeUsefulPackage/FakerJsType/FakerJsType";
import { SomeUsefulPackage } from "@/component/VariousPackagesUse/Component/Packages/SomeUsefulPackage/SomeUsefulPackage";
import { ReactSelectType } from "@/component/VariousPackagesUse/Component/Packages/InputFormPackage/ReactSelectType/ReactSelectType";
import { InputFormPackage } from "@/component/VariousPackagesUse/Component/Packages/InputFormPackage/InputFormPackage";
import { ReactChartJsType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/ReactChartJsType/ReactChartJsType";
import { RechartsType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/RechartsType/RechartsType";
import { VictoryType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/VictoryType/VictoryType";
import { GoogleChartsType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/GoogleChartsType/GoogleChartsType";
import { HighchartsType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/HighchartsType/HighchartsType";
import { NivoType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/NivoType/NivoType";
import { ApexChartsType } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/ApexChartsType/ApexChartsType";
import { ChartPackage } from "@/component/VariousPackagesUse/Component/Packages/ChartPackage/ChartPackage";
import { PrimereactType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/PrimereactType/PrimereactType";
import { MaterialUiType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/MaterialUiType/MaterialUiType";
import { AntDesignType } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/AntDesignType/AntDesignType";
import { BootstrapType as UiBootstrap } from "@/component/VariousPackagesUse/Component/Packages/UiComponentPackage/BootstrapType/BootstrapType";
import { BootstrapType as StyleBootstrapType } from "@/component/VariousPackagesUse/Component/Packages/LayoutStylingPackage/BootstrapType/BootstrapType";

export const getPackagesRouteLink = (_dataPass: any) => {
    const packagesRouteData = getPackagesRouteData({})
    return {
        path: useHelperHook({
            type: 'routeConcatenate', data: [
                packagesRouteData.packages.route
            ]
        }),
        loader: () => getPackagesRouteLoader({
            type: packagesRouteData.packages.route
        }),
        element: <PackagesContextProvider>
            <Packages />
        </PackagesContextProvider>,
        children: [
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.uiComponentPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.uiComponentPackage.route,
                }),
                element: <UiComponentPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                        }),
                        element: <BlueprintJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                        }),
                        element: <SpectrumWebComponentsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route
                        }),
                        element: <ChakraUiType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route
                        }),
                        element: <AntDesignType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route
                        }),
                        element: <MaterialUiType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route
                        }),
                        element: <PrimereactType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                        }),
                        element: <UiBootstrap />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.chartPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.chartPackage.route,
                }),
                element: <ChartPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route
                        }),
                        element: <ApexChartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.nivoType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.nivoType.route
                        }),
                        element: <NivoType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route
                        }),
                        element: <HighchartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route
                        }),
                        element: <GoogleChartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.victoryType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.victoryType.route
                        }),
                        element: <VictoryType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route
                        }),
                        element: <RechartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route
                        }),
                        element: <ReactChartJsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.inputFormPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.inputFormPackage.route,
                }),
                element: <InputFormPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.inputFormPackage.route,
                                packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route
                        }),
                        element: <ReactSelectType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.someUsefulPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.someUsefulPackage.route
                }),
                element: <SomeUsefulPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.someUsefulPackage.route,
                                packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route
                        }),
                        element: <FakerJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.someUsefulPackage.route,
                                packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                        }),
                        element: <LogSymbolsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.layoutStylingPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.layoutStylingPackage.route
                }),
                element: <LayoutStylingPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                        }),
                        element: <ReactGridLayoutType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                        }),
                        element: <ChromaJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route
                        }),
                        element: <TailwindType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                        }),
                        element: <StyleBootstrapType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                        }),
                        element: <StyledComponentsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.animationPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.animationPackage.route,
                }),
                element: <AnimationPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route
                        }),
                        element: <AnimeJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route
                        }),
                        element: <FramerMotionType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route
                        }),
                        element: <ReactSpringType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.animateType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.animateType.route
                        }),
                        element: <AnimateType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.pageScrollPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.pageScrollPackage.route,
                }),
                element: <PageScrollPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route
                        }),
                        element: <ReactScrollType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                        }),
                        element: <SmoothScrollbarType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                        }),
                        element: <IntersectionObserverType />,
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.tostAlertPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.tostAlertPackage.route,
                }),
                element: <TostAlertPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.tostAlertPackage.route,
                                packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route
                        }),
                        element: <ToastifyType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.tostAlertPackage.route,
                                packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                        }),
                        element: <SweetAlertType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.dateTimePackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.dateTimePackage.route,
                }),
                element: <DateTimePackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.dateTimePackage.route,
                                packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route
                        }),
                        element: <LuxonType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.dateTimePackage.route,
                                packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route
                        }),
                        element: <MomentType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.paginationPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.paginationPackage.route,
                }),
                element: <PaginationPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.paginationPackage.route,
                                packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route
                        }),
                        element: <ReactPaginateType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.loaderProgressPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.loaderProgressPackage.route
                }),
                element: <LoaderProgressPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                        }),
                        element: <ReactTopLoadingBarType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                        }),
                        element: <ReactCircularProgressbarType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                        }),
                        element: <RcProgressType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route
                        }),
                        element: <RespinnerType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                        }),
                        element: <SpinnersReactType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                        }),
                        element: <ReactSpinnersType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                        }),
                        element: <ReactLoaderSpinnerType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.iconPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.iconPackage.route,
                }),
                element: <IconPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.iconPackage.route,
                                packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route
                        }),
                        element: <ReactIconType />
                    }
                ]
            }
        ]
    }
}
